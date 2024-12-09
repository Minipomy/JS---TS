const express = require('express')
const { index, counter } = require('../controllers/mainController.js')

const route = express.Router()

route.get('/', index)
route.post('/click', counter)

module.exports = route  