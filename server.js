const express = require('express')
const app = express()
const port = 8080  // 1024 -> 65535 are good port numbers for dev  

// require routes here
const calculatorRoute = require('./routes/calculatorRoute')

// create a route
app.use('/calculator', calculatorRoute)

// start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})