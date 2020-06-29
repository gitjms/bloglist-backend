const app = require('./app')
const http = require('http')
const https = require('https')
const fs = require('fs')
const config = require('./utils/config')
const logger = require('./utils/logger')

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

http.createServer(app).listen(config.PORT)

const server = https.createServer(options, app)

server.listen(8000, () => {
  logger.info(`Server running on port ${8000}`)
})
