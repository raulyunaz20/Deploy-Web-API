const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
	res.send("Hello world! <br /> Add / api to the url to get simple data")
})

app.get("/api", (req,res) => {
	res.json({ user: { name: "Raul", nim: "11191028" } })
})

app.listen(port, () => {
	console.log('http://localhost:${port}/')
})