const express =  require("express");
const mongoose = require("mongoose");
const bodyParser =require('body-parser')


const app = express();
// app.use(express.json())
app.use(bodyParser.json())


require("./mongo");
require("./model/post");


const Post = require("./model/post");
// /mongoose.model("postSchema");



app.get("/", async(req,res)=>{
  res.send("<h1>Hello</h1>")
});



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

    // try {
    //     const posts = await post.find({})
    //     res.send(posts)
    // } catch (error) {
    //     res.status(500)
    // }
});
app.post('/price',async(req,res)=>{

    console.log(req.body.item_name)

     const np={
        item_name: req.body.item_name
        
    }
   
    const  PostResult = await Post.findOne(np);
    

    console.log(PostResult)

        res.json({PostResult,success: "OK"})


});

app.post("/",async(req,res)=>{
    console.log(req.body.item_name)
    console.log(req.body.price)
    const np={
        item_name: req.body.item_name,
        price: req.body.price
        
    }

    const all_result = await Post.find(np);

    console.log(all_result)
    res.json({all_result, success: "OK"})

});

app.listen(5000,function(){
    console.log("Server is running...")
});