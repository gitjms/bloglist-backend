const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (request, response) => {
// blogRouter.get('/', async (request, response) => {
  Blog.find({}).then(blog => {
    response.json(blog.map(blog => blog.toJSON()))
  })
  // const blogs = await Blog.find({})//
  //   response.json(blogs.map(blog => blog.toJSON()))
})

blogRouter.get('/:id', (request, response, next) => {
// blogRouter.get('/:id', async (request, response, next) => {
  Blog.findById(request.params.id)
    .then(blog => {
      if (blog) {
        response.json(blog.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
  
  // try{
  //   const blogs = await Blog.findById(request.params.id)
  //    if (blog) {
  //       response.json(blog.toJSON())
  //     } else {
  //       response.status(404).end()
  //     }
  //   } catch(exception) {
  //     next(exception)
  //   }
})

blogRouter.post('/', (request, response, next) => {
// blogRouter.post('/', async (request, response, next) => {
  const body = request.body.content
  console.log(body)

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: Number(body.likes) || 0,
  })
  blog.save()
    .then(savedBlog => savedBlog.toJSON())
    .then(savedAndFormattedBlog => {
      response.json(savedAndFormattedBlog)
    })
    .catch(error => next(error))
  // try{
  //   const savedBlog = await blog.save()
  //     response.json(savedAndFormattedBlog)
  //   } catch(exception) {
  //     next(exception)
  //   }
})

blogRouter.delete('/:id', (request, response, next) => {
// blogRouter.delete('/:id', async (request, response, next) => {
  Blog.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
  // try {
  //   await Blog.findByIdAndRemove(request.params.id)
  //   response.status(204).end()
  // } catch(exception) {
  //   next(exception)
  // }
})

blogRouter.put('/:id', (request, response, next) => {
// blogRouter.put('/:id', async (request, response, next) => {
  const body = request.body
  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: Number(body.likes),
  }
  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then(updatedBlog => updatedBlog.toJSON())
    .then(updatedAndFormattedBlog => {
      response.json(updatedAndFormattedBlog)
    })
    .catch(error => next(error))
  // try {
  //   const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  //   response.json(updatedBlog.toJSON())
  // } catch(exception) {
  //   next(exception)
  // }
})

module.exports = blogRouter