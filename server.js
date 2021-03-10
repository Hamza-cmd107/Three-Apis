// requiring dependencies
const serverless = require("serverless-http");
const express =  require("express");
const mongoose = require("mongoose");
const bodyParser =require('body-parser');
const app = express();
app.use(express.json()); // yahan pehly body-parser.json() likhty thy mgr ab express version >=4.16 m express.json() likhty hai

//requiring modules
require("./mongo");
require("./model/post");
const Post = require("./model/post");

// first API for taking input from user
app.post("/nameprice", async(req,res)=>{
    const np={
        item_name: req.body.item_name,
        price: req.body.price
    }
    console.log(np)
    const cur_post = new Post(np)
    cur_post.save().then(()=>{
        res.json({np, success:"OK"})
    }).catch((err)=>{
        console.log(err)
        res.json({np, success:"NOT OK"})
    })
});
//second API for take input item_name and fetch price of an item name according to the data present in database then the output send to the user is null.
app.post('/price',async(req,res)=>{
    console.log(req.body.item_name)
     const np={
        item_name: req.body.item_name
    }
    const  PostResult = await Post.findOne(np);
    console.log(PostResult)
        res.json({PostResult,success: "OK"})
});
// third and last API for send all the records to the user from database.
app.post("/",async(req,res)=>{
    console.log(req.body.item_name)
    console.log(req.body.price)
    const np={
        item_name: req.body.item_name,
        price: req.body.price       
    }
    const all_result = await Post.findOne();
    console.log(all_result)
    console.log(np)
    res.json({all_result, success: "OK"})
});
//app listen to the port 3000
app.listen(3000,()=>{
    console.log("Server starts")
});
module.exports.handler = serverless(app)