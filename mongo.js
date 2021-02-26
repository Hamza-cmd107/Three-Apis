//requiring mongoose library for connecting database mongodb atlas
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOURI).then(()=>console.log("connected"));
