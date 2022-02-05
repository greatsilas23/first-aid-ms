const express = require("express")
const bodyParser = require("body-parser")
const port = process.env.PORT || 5005
const app = express()
app.post('/', function(req, res){
	let textee = req.body.textee
	let texter = req.body.texter
	let chat = req.body.chat
	console.log(`${textee} texted ${texter}, chat ${chat}`)
})
app.post('/', function(req, res){
	let callee = req.body.callee
	let caller = req.body.caller
	let duration = req.body.duration
	console.log(`${callee} called ${caller}, duration ${duration}`)
})
app.post('/', function(req, res){
	let meetee = req.body.metee
	let meeter = req.body.meeter
	let meeting = req.body.meeting
	console.log(`${meetee} met ${meeter}, meeting ${meeting}`)
})
app.post('/', function(req, res){
	let apper = req.body.apper
	console.log(`appended ${apper} to appers`)
})
app.listen(port, () => console.log(`listening on port ${port}`))
