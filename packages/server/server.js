const express = require('express')
const morgan = require('morgan')
const wishlistRouter = require('./controllers/wishlist')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/wishlist', wishlistRouter)

app.get('/ping', (request, response) => {
  return response.json('pong')
})

app.use(express.static('public'))

const listener = app.listen(process.env.PORT || 3001, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
