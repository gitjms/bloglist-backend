const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const User = require('../models/user')
const Blog = require('../models/blog')

const api = supertest(app)


describe('when there is initially some blogs saved', () => {

  beforeEach(async () => {
    await User.deleteMany()
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', name: 'Root Proot', passwordHash })
    await user.save()

    await Blog.deleteMany({})
    await helper.createBlogs(helper.initialBlogs)
  })

  test('blogs are returned as json', async () => {
    const users = await helper.usersInDb()
    const user = users[0]
    const userForToken = {
      username: user.username,
      id: user.id,
    }
    const token = jwt.sign(userForToken, process.env.SECRET)

    await api
      .get('/api/blogs')
      .set('Authorization', token)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all blogs are returned', async () => {
    const users = await helper.usersInDb()
    const user = users[0]
    const userForToken = {
      username: user.username,
      id: user.id,
    }
    const token = jwt.sign(userForToken, process.env.SECRET)

    const response = await api
      .get('/api/blogs')
      .set('Authorization', token)
    expect(response.body).toHaveLength(helper.initialBlogs.length)
  })

  test('a specific blog is within the returned blogs', async () => {
    const users = await helper.usersInDb()
    const user = users[0]
    const userForToken = {
      username: user.username,
      id: user.id,
    }
    const token = jwt.sign(userForToken, process.env.SECRET)

    const response = await api
      .get('/api/blogs')
      .set('Authorization', token)
    const titles = response.body.map(r => r.title)
    expect(titles).toContainEqual('Go To Statement Considered Harmful')
  })

  test('blog identification is \'id\', not \'_id\'', async () => {
    const users = await helper.usersInDb()
    const user = users[0]
    const userForToken = {
      username: user.username,
      id: user.id,
    }
    const token = jwt.sign(userForToken, process.env.SECRET)

    const response = await api
      .get('/api/blogs')
      .set('Authorization', token)
    const id = response.body.map(r => r.id)
    expect(id).toBeDefined()
  })

})

describe('addition of a new blog', () => {

  beforeEach(async () => {
    await User.deleteMany()
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', name: 'Root Proot', passwordHash })
    await user.save()

    await Blog.deleteMany({})
    await helper.createBlogs(helper.initialBlogs)
  })

  test('succeeds with valid data ', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const users = await helper.usersInDb()
    const user = users[0]

    const userForToken = {
      username: user.username,
      id: user.id,
    }
    const token = 'bearer '.concat(jwt.sign(userForToken, process.env.SECRET))

    const newBlog = {
      title: 'Brand New Blog',
      author: 'John Doe',
      url: 'https://doeblogs.brandnewblog.com/',
      likes: 2,
      user: user.id
    }

    await api
      .post('/api/blogs')
      .set('Authorization', token)
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(blogsAtStart.length + 1)

    const titles = blogsAtEnd.map(n => n.title)
    expect(titles).toContainEqual('Brand New Blog')
  })

  test('succeeds without likes and will have zero likes', async () => {
    const users = await helper.usersInDb()
    const user = users[0]
    const userForToken = {
      username: user.username,
      id: user.id,
    }
    const token = 'bearer '.concat(jwt.sign(userForToken, process.env.SECRET))

    const newBlog = {
      title: 'Super New Blog',
      author: 'Jane Doe',
      url: 'https://doeblogs.supernewblog.com/',
      user: user.id
    }

    await api
      .post('/api/blogs')
      .set('Authorization', token)
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    const likes = blogsAtEnd.map(n => n.likes)
    expect(likes[blogsAtEnd.length - 1]).toBe(0)
  })

  test('fails with status code 400 if data invalid, part 1', async () => {
    const users = await helper.usersInDb()
    const user = users[0]
    const userForToken = {
      username: user.username,
      id: user.id,
    }
    const token = 'bearer '.concat(jwt.sign(userForToken, process.env.SECRET))

    const newBlog = {
      author: 'John Doe Blogger',
      likes: 2
    }

    await api
      .post('/api/blogs')
      .set('Authorization', token)
      .send(newBlog)
      .expect(400)
  })

  test('fails with status code 400 if data invalid, part 2', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const users = await helper.usersInDb()
    const user = users[0]
    const userForToken = {
      username: user.username,
      id: user.id,
    }
    const token = 'bearer '.concat(jwt.sign(userForToken, process.env.SECRET))

    const newBlog = {
      author: 'John Doe Blogger',
      url: 'https://doeblogs.brandnewblog.com/',
      likes: 2,
      user:user.id
    }

    await api
      .post('/api/blogs')
      .set('Authorization', token)
      .send(newBlog)
      .expect(400)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(blogsAtStart.length)
  })

})

describe('viewing a specific blog', () => {

  beforeEach(async () => {
    await User.deleteMany()
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', name: 'Root Proot', passwordHash })
    await user.save()

    await Blog.deleteMany({})
    await helper.createBlogs(helper.initialBlogs)
  })

  test('succeeds with a valid id', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToView = blogsAtStart[0]
    const users = await helper.usersInDb()
    const user = users[0]
    const userForToken = {
      username: user.username,
      id: user.id,
    }
    const token = 'bearer '.concat(jwt.sign(userForToken, process.env.SECRET))

    const resultBlog = await api
      .get(`/api/blogs/${blogToView.id}`)
      .set('Authorization', token)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(resultBlog.body.author).toEqual(blogToView.author)
  })

})

describe('deletion of a blog', () => {

  beforeEach(async () => {
    await User.deleteMany()
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', name: 'Root Proot', passwordHash })
    await user.save()

    await Blog.deleteMany({})
    await helper.createBlogs(helper.initialBlogs)
  })

  test('succeeds with status code 204 if id is valid', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]
    const users = await helper.usersInDb()
    const user = users[0]
    const userForToken = {
      username: user.username,
      id: user.id,
    }
    const token = 'bearer '.concat(jwt.sign(userForToken, process.env.SECRET))

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .set('Authorization', token)
      .expect(204)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1)

    const titles = blogsAtEnd.map(r => r.title)
    expect(titles).not.toContainEqual(blogToDelete.title)
  })

})

describe('updating likes for a blog', () => {

  beforeEach(async () => {
    await User.deleteMany()
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', name: 'Root Proot', passwordHash })
    await user.save()

    await Blog.deleteMany({})
    await helper.createBlogs(helper.listWithOneBlog)
  })

  test('succeeds with valid data', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToUpdate = blogsAtStart[0]
    const oldLikes = blogToUpdate.likes
    const users = await helper.usersInDb()
    const user = users[0]
    const userForToken = {
      username: user.username,
      id: user.id,
    }
    const token = 'bearer '.concat(jwt.sign(userForToken, process.env.SECRET))

    blogToUpdate.likes = oldLikes + 10
    await Blog.update(blogToUpdate)

    await api
      .get(`/api/blogs/${blogToUpdate.id}`)
      .set('Authorization', token)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd[0].likes).toBe(oldLikes + 10)
  })

})


afterAll(() => {
  mongoose.connection.close()
})