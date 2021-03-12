//requiring mongoose for connecting database mongodb atlas
const mongoose = require("mongoose");
//making schema
const postSchema = mongoose.Schema({
    item_name: {
        type : String,
        required : true
    },
    price : {
        type : String,
        require : true
    }

})
module.exports=Post=mongoose.model("Post", postSchema)