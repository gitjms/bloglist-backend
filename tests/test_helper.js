const jwt = require('jsonwebtoken')
const Blog = require('../models/blog')
const User = require('../models/user')

const mostPopularBlog = { title: 'Coding Horror', author: 'Jeff Atwood', likes: 555 }

const mostBlogsByAuthor = { author: 'Hannu Hanhi',  blogs: 5 }

const mostLikesByAuthor = { author: 'Hannu Hanhi', likes: 951 }

const listWithOneUser = [
  {
    username: 'root',
    name: 'Root Proot',
    password: 'sekret'
  }
]

const initialUsers = [
  {
    username: 'root',
    name: 'Root Proot',
    password: 'sekret'
  },
  {
    username: 'jaska',
    name: 'Jaska Jokunen',
    password: 'jaska'
  },
  {
    username: 'aku',
    name: 'Aku Anka',
    password: 'akua'
  }
]

const listWithOneBlog = [
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5
  }
]

const initialBlogs = [
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5
  },
  {
    title: 'David Walsh Blog',
    author: 'David Walsh',
    url: 'https://davidwalsh.name/',
    likes: 50
  },
  {
    title: 'Coding Horror',
    author: 'Jeff Atwood',
    url: 'https://blog.codinghorror.com/',
    likes: 555
  },
  {
    title: 'Blogi 1',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi/1.com/',
    likes: 118
  },
  {
    title: 'Blogi 2',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi/2.com/',
    likes: 270
  },
  {
    title: 'Blogi 3',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi/3.com/',
    likes: 130
  },
  {
    title: 'Blogi 4',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi/4.com/',
    likes: 347
  },
  {
    title: 'Blogi 5',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi/5.com/',
    likes: 86
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'x', author: 'y', url: 'z', user: '_id' })
  await blog.save()
  await blog.remove()

  return blog.id.toString()
}

const createBlogs = async object => {
  const users = await usersInDb()

  const blogObjects = object
    .map(o => new Blog({
      title: o.title, author: o.author, url: o.url, likes: o.likes, user: users[0].id
    }))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
}

const createUsers = async object => {
  const userObjects = object
    .map(o => new User({ username: o.username, name: o.name, password: o.password }))
  const promiseArray = userObjects.map(user => user.save())
  await Promise.all(promiseArray)
}

const getUserIdAndToken = async () => {
  const users = await usersInDb()
  const user = users[0]
  const userForToken = { username: user.username, id: user.id, }
  const token = 'bearer '.concat(jwt.sign(userForToken, process.env.SECRET))

  const result = [user.id, token]
  return result
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
}

module.exports = {
  initialBlogs,
  mostPopularBlog,
  mostBlogsByAuthor,
  mostLikesByAuthor,
  listWithOneBlog,
  listWithOneUser,
  initialUsers,
  createBlogs,
  createUsers,
  nonExistingId,
  getUserIdAndToken,
  blogsInDb,
  usersInDb
}