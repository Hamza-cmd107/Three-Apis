//requiring mongoose library for connecting database mongodb atlas
const mongoose = require("mongoose");
require("dotenv").config({path: ".env"});

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOURI,{useNewUrlParser: true },{ useUnifiedTopology: true }, { useMongoClient:true }).then(()=>console.log("connected"));
