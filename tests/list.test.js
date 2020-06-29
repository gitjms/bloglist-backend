const listHelper = require('./list_helper')
const helper = require('./test_helper')

describe('total likes', () => {

  test('of empty list is zero', () => {
    const blogs = []
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(helper.listWithOneBlog)
    expect(result).toBe(5)
  })

  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(helper.initialBlogs)
    expect(result).toBe(1561)
  })

})

describe('most popular blog', () => {

  test('equals the blog which has most likes', () => {
    const result = listHelper.favoriteBlog(helper.initialBlogs)
    expect(result).toEqual(helper.mostPopularBlog)
  })

})

describe('most blogs by author', () => {

  test('equals the author who has most blogs', () => {
    const result = listHelper.mostBlogs(helper.initialBlogs)
    expect(result).toEqual(helper.mostBlogsByAuthor)
  })

})

describe('most likes by author', () => {

  test('equals the author who has most likes', () => {
    const result = listHelper.mostLikes(helper.initialBlogs)
    expect(result).toEqual(helper.mostLikesByAuthor)
  })

})
