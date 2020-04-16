const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const { getUsers } = require('../lib/db')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/challenge/get', async (req, res) => {
  try {
    const id = '123'
    const body = req.body
    const valid = body.id && body.id === id
    if (!valid) {
      res.status(403).send()
      return false
    }

    const data = { }

    const response = {
      data: data,
      message: 'OK'
    }

    res.status(500).send(response)
    console.log(response);
  } catch (err) {
    console.log(err.message)
    const response = { data: null, message: err.message }
    res.status(500).send(response)
  }
})

// Handle invalid route
app.all('*', function (req, res) {
  const response = { data: null, message: 'Route in auth not found!!' }
  res.status(400).send(response)
})

// wrap express app instance with serverless http function
module.exports.handler = serverless(app)
