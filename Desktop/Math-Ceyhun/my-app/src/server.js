const express = require("express")
const bodyParser = require("body-parser")
const port = process.env.PORT || 5005
const app = express()
let items = []
app.post('/', function(req, res){
	const textee = req.body.textee
	const texter = req.body.texter
	const chat = req.body.chat
	items.push({
	    text: {
	        textee: textee,
	        texter: texter,
	        chat: chat,
	        id: Math.floor(Math.random(9))
	    }
	})
	console.log(`${textee} texted ${texter}, chat ${chat}`)
})
app.post('/', function(req, res){
	let callee = req.body.callee
	let caller = req.body.caller
	let duration = req.body.duration
	items.push({
	    call: {
	        callee: callee,
	        caller: caller,
	        duration: duration,
	        id: Math.floor(Math.random(9))
	    }
	})
	console.log(`${callee} called ${caller}, duration ${duration}`)
})
app.post('/', function(req, res){
	let meetee = req.body.metee
	let meeter = req.body.meeter
	let meeting = req.body.meeting
	items.push({
	    meeting: {
	        meetee: meetee,
	        meeter: meeter,
	        meeting: meeting,
	        id: Math.floor(Math.random(9))
	    }
	})
	console.log(`${meetee} met ${meeter}, meeting ${meeting}`)
})

app.post('/', function(req, res){
	let apper = req.body.apper
	items.push({
	    apper: {
	        apper: apper,
	        id: Math.floor(Math.random(9))
	    }
	})
	console.log(`appended ${apper} to appers`)
})
app.listen(port, () => console.log(`listening on port ${port}`))
