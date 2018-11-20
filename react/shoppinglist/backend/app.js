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
				let token = createToken();
				loggedUsers.push({
					"username":user.username,
					"token":token
				})
				return res.status(200).json({
					"token":token
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

function isUserLogged(req,res,next) {
	let token = req.headers.token;
	for(let i=0;i<loggedUsers.length;i++) {
		if(token === loggedUsers[i].token) {
			req.username = loggedUsers[i].username;
			return next();
		}
	}
	res.status(403).json({"message":"not allowed"});
}

function createToken() {
	let token = "";
	let letters = "abcdefghijABCDEFGHIJ0123456789"
	for(let i=0;i<1024;i++) {
		let temp = Math.floor(Math.random()*30);
		token = token+letters[temp]
	}
	return token;
}

app.use("/api",isUserLogged, shoppingrouter);

app.listen(3001);
console.log("Running in port 3001")