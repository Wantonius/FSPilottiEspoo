const express = require("express");
const mongoose = require("mongoose");
const shoppingItem = require("../models/shoppingitem");

let router = express.Router();


router.get("/shopping", function(req,res) {
	shoppingItem.find(function(err, items) {
		if(err){
			return res.status(404).json({"message":"shoppinglist not found"})
		}
		if(!items) {
			return res.status(404).json({"message":"shoppinglist not found"})
		}
		return res.status(200).json(items);
	})
})

router.post("/shopping", function(req,res) {
	let item = new shoppingItem({
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	})
	item.save(function(err) {
		if(err) {
			return res.status(409).json({"message":"item not saved"})
		}
		return res.status(200).json({"message":"success"});
	})

});

router.delete("/shopping/:id", function(req,res) {
	shoppingItem.deleteOne({"_id":req.params.id}, function(err) {
		if(err) {
			return res.status(404).json({"message":"not found"});			
		}
		return res.status(200).json({"message":"success"})
	})
});

module.exports = router;