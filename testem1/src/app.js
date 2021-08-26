const express = require('express')
const responseTime = require('response-time')
const app = express()
const port = 3333

app.use(responseTime())

app.get('/', async (req, res) => {
    res.send('service 1 - with error')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})