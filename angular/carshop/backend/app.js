const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

let database = [];
let id = 100;

app.get("/api/cars", function(req,res) {
	res.status(200).json(database);
})

app.post("/api/cars", function(req,res) {
	let car = {
		"id":id,
		"type":req.body.type,
		"price":req.body.price
	}
	database.push(car);
	id++;
	res.status(200).json({"message":"success"});
});

app.delete("/api/cars/:id", function(req,res) {
	let id = req.params.id;
	for(let i=0;i<database.length;i++) {
		if(id == database[i].id) {
			database.splice(i,1);
			return res.status(200).json({"message":"success"});
		}
	}
	res.status(404).json({"message":"not found"});
});

app.listen(3000);
console.log("Running in port 3000");