const listHelper = require('../utils/list_helper')
// const blogRouter = require('express').Router()
// const Blog = require('../models/blog')


const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

const listWithManyBlogs = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f5',
    title: 'David Walsh Blog',
    author: 'David Walsh',
    url: 'https://davidwalsh.name/',
    likes: 50,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f1',
    title: 'Coding Horror',
    author: 'Jeff Atwood',
    url: 'https://blog.codinghorror.com/',
    likes: 555,
    __v: 0
  },
  {
    _id: '5a422a536b54a676234d17f1',
    title: 'Blogi 1',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi.com/1/',
    likes: 118,
    __v: 0
  },
  {
    _id: '5a422a536df4a678434d17f1',
    title: 'Blogi 2',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi.com/2/',
    likes: 270,
    __v: 0
  },
  {
    _id: '5a42g4536b7ja676234d17f1',
    title: 'Blogi 3',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi.com/3/',
    likes: 130,
    __v: 0
  },
  {
    _id: '5h522a536e94a67f334d17f1',
    title: 'Blogi 4',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi.com/4/',
    likes: 347,
    __v: 0
  },
  {
    _id: '5ak72a536f44a674h349l7f1',
    title: 'Blogi 5',
    author: 'Hannu Hanhi',
    url: 'https://blogs.hannuhanhi.com/5/',
    likes: 86,
    __v: 0
  }
]

const mostPopularBlog =
{
  title: 'Coding Horror',
  author: 'Jeff Atwood',
  likes: 555
}

const mostBlogsByAuthor =
{
  author: 'Hannu Hanhi',
  blogs: 5
}

const mostLikesByAuthor =
{
  author: 'Hannu Hanhi',
  likes: 951
}

describe('total likes', () => {

  test('of empty list is zero', () => {
    const blogs = []

    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('of a bigger list is calculated right', () => {
    // blogRouter.get('/', (request, response) => {
    //   const blogs = Blog.find({}).then(blog => {
    //     response.json(blog.map(blog => blog.toJSON()))
    //   })

    const result = listHelper.totalLikes(listWithManyBlogs)
    expect(result).toBe(610)
    // })
  })
})

describe('most popular blog', () => {
  test('equals the blog which has most likes', () => {
    // blogRouter.get('/', (request, response) => {
    //   const blogs = Blog.find({}).then(blog => {
    //     response.json(blog.map(blog => blog.toJSON()))
    //   })

    const result = listHelper.favoriteBlog(listWithManyBlogs)
    expect(result).toEqual(mostPopularBlog)
    // })
  })
})

describe('most blogs by author', () => {
  test('equals the author who has most blogs', () => {
    // blogRouter.get('/', (request, response) => {
    //   const blogs = Blog.find({}).then(blog => {
    //     response.json(blog.map(blog => blog.toJSON()))
    //   })

    const result = listHelper.mostBlogs(listWithManyBlogs)
    expect(result).toEqual(mostBlogsByAuthor)
  })
  // })
})

describe('most likes by author', () => {
  test('equals the author who has most likes', () => {
    // blogRouter.get('/', (request, response) => {
    //   const blogs = Blog.find({}).then(blog => {
    //     response.json(blog.map(blog => blog.toJSON()))
    //   })

    const result = listHelper.mostLikes(listWithManyBlogs)
    expect(result).toEqual(mostLikesByAuthor)
  })
  // })
})
