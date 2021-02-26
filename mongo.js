//requiring mongoose library for connecting database mongodb atlas
var somevar = false;
var PTest = function () {
    return new Promise(function (resolve, reject) {
        if (somevar === true)
            resolve();
        else
            reject();
    });
}
var myfunc = PTest();
myfunc.then(function () {
     console.log("Promise Resolved");
});
// See the Difference here
myfunc.catch(function () {
     console.log("Promise Rejected");
});
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOURI,{ useUnifiedTopology: true },{ useNewUrlParser: true }).then(()=>console.log("connected"));
