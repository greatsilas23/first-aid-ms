const express = require('express')
const app = express()
const port = process.env.port || 4000
const LinearSearch = require('./LinearSearch')
let registeredUsers = {}
app.post('/register', (req, res) => {
    let userName = req.body.userName
    let userPassword = req.body.userPassword
    registeredUsers.push({userName, passWord})
    console.log(`Username: ${userName}, Password: ${userPassword}`)
})
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})