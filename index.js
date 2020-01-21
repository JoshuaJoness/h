const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors({credentials: true}))

// require('dotenv').config()

app.listen(4000, () => {
	console.log('Listening on port 4000');
})

app.get('/ping', require('./controllers/getPing.js'))
app.get('/posts', require('./controllers/getPosts.js'))
