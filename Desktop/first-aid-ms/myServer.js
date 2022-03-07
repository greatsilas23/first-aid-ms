const express = require('express')
const app = express()
const port = process.env.PORT || 4001

app.post('/first-aid-ms-login', (req,res) => {
    let username = req.body.login
    let passkey = req.body.passkey
    res.send(`${username}, ${passkey} added`)
})
app.post('/first-aid-ms-information', (req,res) => {
    let gender = req.body.gender
    let height = req.body.height
    let weight = req.body.weight
    let vaccinations = req.body.vaccinations
    let allergies = req.body.allergies
    res.send(`${gender}, ${height}, ${weight}, ${vaccinations}, ${allergies} added`)
})
app.post('/first-aid-ms-registration', (req,res) => {
    let name = req.body.name
    let email = req.body.email
    let age = req.body.age
    let phone = req.body.phone
    res.send(`${username} added`)
})
app.listen(`listening on port ${port}`, port)