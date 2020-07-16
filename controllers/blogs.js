const blogRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Blog = require('../models/blog')
const User = require('../models/user')

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
    .populate('user', { username: 1, name: 1 })
    .populate('comments', { content: 1 })
  response.json(blogs.map(blog => ({
    url: blog.url,
    title: blog.title,
    author: blog.author,
    likes: blog.likes,
    user: blog.user,
    comments: blog.comments,
    id: blog.id
  })))
})

blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  if (blog) {
    response.json(blog.toJSON())
  } else {
    response.status(404).end()
  }
})

blogRouter.post('/', async (request, response) => {
  const body = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: Number(body.likes) || 0,
    user: user.id,
    comments: body.comments
  })

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog.id)
  await user.save()

  response.json(savedBlog.toJSON())
})

blogRouter.delete('/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const blog = await Blog.findById(request.params.id)
  if ( blog.user.toString() === decodedToken.id ) {
    blog.deleteOne()
    response.status(204).end()
  } else {
    return response.status(401).json({ error: 'not authorized to delete this blog' })
  }
})

blogRouter.put('/:id', async (request, response) => {
  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: Number(body.likes),
    user: body.user,
    comments: body.comments
  }

  const blogToUpdate = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })

  const returnedBlog ={
    id: blogToUpdate.id,
    title: blogToUpdate.title,
    author: blogToUpdate.author,
    url: blogToUpdate.url,
    likes: Number(blogToUpdate.likes),
    user: blogToUpdate.user,
    comments: blogToUpdate.comments
  }

  response.json(returnedBlog)
})

module.exports = blogRouter