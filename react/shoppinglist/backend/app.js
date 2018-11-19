const express = require("express");
const bodyParser = require("body-parser")

let app = express();

app.use(bodyParser.json());

//"database"

let database = [
	{
		"id":99,
		"type":"Banana",
		"count":2,
		"price":3
	}
];
let id = 100;

app.get("/api/shopping", function(req,res) {
	res.status(200).json(database);
})

app.post("/api/shopping", function(req,res) {
	let item = {
		id:id,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	}
	id++;
	database.push(item);
	console.log(database);
	res.status(200).json({"message":"success"});
});

app.listen(3001);
console.log("Running in port 3001")