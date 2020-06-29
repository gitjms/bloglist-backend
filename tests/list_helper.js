const _ = require('lodash')
const result_full = require('../utils/for_testing').result_full
const mostBlogsAuthor = require('../utils/for_testing').mostBlogsAuthor
const sumLikesByAuthors = require('../utils/for_testing').sumLikesByAuthors


const totalLikes = blogs => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.length === 0
    ? 0
    : blogs.reduce(reducer, 0)
}

const favoriteBlog = blogs => {
  return result_full(_.maxBy(blogs,'likes'))
}

const mostBlogs = blogs => {

  const newObject = _.countBy(blogs, 'author')
  const newList = _.zip(Object.keys(newObject),Object.values(newObject))

  return _.maxBy(mostBlogsAuthor(newList),'blogs')
}

const mostLikes = blogs => {
  const authors = Object.values(_.mapValues(blogs, 'author'))
  const likes = Object.values(_.mapValues(blogs, 'likes'))
  const newList = _.zip(authors,likes)
  const result = _.maxBy(sumLikesByAuthors(newList),'likes')

  return result
}

module.exports = {
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}