const mongoose = require("mongoose");

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