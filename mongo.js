const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
} else if (process.argv.length>7) {
  console.log('Too much arguments. Give a two part name in quotes: \'Donald Duck\'.')
  process.exit(1)
}

const input = {
  title: process.argv[2],
  author: process.argv[3],
  url: process.argv[4],
  likes: process.argv[5],
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
  const person = new Blog({
    password: input.password,
    title: input.title,
    author: input.author,
    url: input.url,
    likes: Number(input.likes),
  })

  person.save().then(() => {
    console.log('added',blog.title,blog.author,'to bloglist')
    mongoose.connection.close()
  })
} else {
  console.log('Too few arguments.')
  mongoose.connection.close()
}
