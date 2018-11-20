const express = require("express");
const bodyParser = require("body-parser")
const shoppingrouter = require("./routes/shoppingrouter");

let app = express();

app.use(bodyParser.json());

app.use("/api",shoppingrouter);

app.listen(3001);
console.log("Running in port 3001")