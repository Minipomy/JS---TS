const express = require('express')
const path = require('path')

// Express Global Settings
const app = express()
const port = 3000

// Routes
const mainRoute = require('./routes/mainRoute.js')

// EJS View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

// Static Serve
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', mainRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))