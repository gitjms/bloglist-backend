const Blog = require('../models/blog')
const User = require('../models/user')

const mostPopularBlog = { title: 'Coding Horror', author: 'Jeff Atwood', likes: 555 }

const mostBlogsByAuthor = { author: 'Hannu Hanhi',  blogs: 5 }

const mostLikesByAuthor = { author: 'Hannu Hanhi', likes: 951 }

const listWithOneUser = [
  {
    username: 'jaska',
    name: 'Jaska Jokunen',
    password: 'jaska',
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
    url: 'https://blogs.hannuhanhi.com/1/',
    likes: 118
  },
  {
    title: 'Blogi 2',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi.com/2/',
    likes: 270
  },
  {
    title: 'Blogi 3',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi.com/3/',
    likes: 130
  },
  {
    title: 'Blogi 4',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi.com/4/',
    likes: 347
  },
  {
    title: 'Blogi 5',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi.com/5/',
    likes: 86
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
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
  nonExistingId,
  blogsInDb,
  usersInDb
}