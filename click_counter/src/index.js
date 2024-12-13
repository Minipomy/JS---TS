const express = require('express')
const path = require('path')
const mainRoute = require('./routes/mainRoute.js')

// Express Global Settings
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// EJS View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

// Static Serve
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', mainRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))