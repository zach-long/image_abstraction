'use strict'

const express = require('express'),
	        app = express()

const routes = require('./app/routes.js')


routes(app)

var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log("Server listening on port " + port)
})
