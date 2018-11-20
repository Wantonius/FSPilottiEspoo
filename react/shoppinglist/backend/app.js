const express = require("express");
const bodyParser = require("body-parser")
const shoppingrouter = require("./routes/shoppingrouter");

let app = express();
app.use(bodyParser.json());
//User databases

let loggedUsers = [];
let registeredUsers = [];

app.post("/login", function(req,res) {
	let user = {
		"username":req.body.username,
		"password":req.body.password
	}
	for(let i=0;i<registeredUsers.length;i++) {
		if(user.username === registeredUsers[i].username) {
			if(user.password === registeredUsers[i].password){
				loggedUsers.push({
					"username":user.username,
					"token":"token123"
				})
				return res.status(200).json({
					"token":"token123"
				})
			}
		}
	}
	res.status(403).json({"message":"wrong credentials"});
});

app.post("/register", function(req,res) {
	let user = {
		"username":req.body.username,
		"password":req.body.password
	}
	for(let i=0;i<registeredUsers.length;i++) {
		if(user.username === registeredUsers[i].username) {
			return res.status(409).json({"message":"username already in use"})
		}		
	}
	registeredUsers.push(user)
	res.status(200).json({"message":"success"});
});



app.use("/api",shoppingrouter);

app.listen(3001);
console.log("Running in port 3001")