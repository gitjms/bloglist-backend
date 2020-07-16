const commentRouter = require('express').Router()
const Comment = require('../models/comment')
const Blog = require('../models/blog')

commentRouter.post('/:id/comments', async (request, response) => {
  const body = request.body

  const blog = await Blog.findById(body.blog)
  console.log('body: ',body)

  const comment = new Comment({
    content: body.content,
    blog: blog.id
  })

  const savedComment = await comment.save()
  blog.comments = blog.comments.concat(savedComment.id)
  await blog.save()

  response.json(savedComment.toJSON())
})

module.exports = commentRouter