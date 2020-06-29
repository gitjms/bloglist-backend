const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
} else if (process.argv.length > 7) {
  console.log('Too much arguments. Give a two part name in quotes: \'Donald Duck\'.')
  process.exit(1)
} else if (process.argv.length !== 3 && process.argv.length !== 7) {
  console.log('Wrong amout of arguments.')
  process.exit(1)
}

const input = {
  password: process.argv[2],
  title: process.argv[3],
  author: process.argv[4],
  url: process.argv[5],
  likes: process.argv[6],
}

if (input.password.length < 3) {
  console.log('password should be at least 3 characters')
  mongoose.connection.close()
}

const url =
  `mongodb+srv://jariDB:${input.password}@cluster0-wnvyv.mongodb.net/bloglist-app?retryWrites=true&w=majority`

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => { console.log(error) })

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes:  Number
})

const Blog = mongoose.model('Blog', blogSchema)

if (process.argv.length === 3) {
  Blog.find({}).then(result => {
    console.log('blogs:')
    result.forEach(blog => {
      console.log(blog.title,blog.author)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length === 7) {
  const blog = new Blog({
    title: input.title,
    author: input.author,
    url: input.url,
    likes: input.likes,
  })

  blog.save().then(() => {
    console.log('added',blog.title,'by',blog.author,'to bloglist')
    mongoose.connection.close()
  })
} else {
  console.log('Too few arguments.')
  mongoose.connection.close()
}
