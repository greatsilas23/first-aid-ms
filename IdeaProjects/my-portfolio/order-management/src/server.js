const express = require('express')
const app = express()
const { Client } = require('pg')
const client = new Client({
    host: 'localhost',
    user: 'root',
    password: 'secret'
    database: 'demo',
    port: '5432'
})
client.connect(function(err){
    if(err) throw err
    console.log(`connected on port ${client.port}`)
})
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})