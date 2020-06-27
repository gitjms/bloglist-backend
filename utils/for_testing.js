const _ = require('lodash')

const palindrome = (string) => {
  return string
    .split('')
    .reverse()
    .join('')
}

const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item
  }

  return array.length === 0
    ? 0
    : array.reduce(reducer, 0) / array.length
}

const result_full = (object) => {
  return _.fromPairs(
    [
      ['title', object.title],
      ['author', object.author],
      ['likes', object.likes]
    ]
  )
}

const mostBlogsAuthor = (object) => {
  const tmpList = []
  const createObject = (item) => {
    tmpList.push({ author: item[0], blogs: item[1] })
  }
  object.forEach(createObject)
  return tmpList
}

const likesByAuthors = (object) => {
  const tmpList = []
  const createObject = (item) => {
    tmpList.push({ author: item[0], likes: item[1] })
  }
  object.forEach(createObject)
  return tmpList
}

const sumLikesByAuthors = (object) => {
  const input = likesByAuthors(object)
  const output = _.map(_.groupBy(input, 'author'),
    function(vals, author) {
      return _.reduce(vals, function(m, o) {
        for (var p in o)
          if (p !== 'author')
            m[p] = (m[p]||0)+o[p]
        return m
      }, { author: author })
    })
  return output
}

module.exports = {
  palindrome,
  average,
  result_full,
  mostBlogsAuthor,
  sumLikesByAuthors
}