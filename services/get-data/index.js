const request = require("request");
var express = require("express");
const app= express();
var UserModel = require('./user');
var config = require('./config');
const mongoose = require('mongoose');
const router = express.Router();

mongoose.connect(
    config.MONGO_URL, {
        useNewUrlParser: true
    }
);

app.get("/getdata", async (req, res, next) => {
    try {
        let users = await UserModel.find({

        });
        
        res.status(200).send(users);
    } catch (ex) {
        console.log(ex);
        res.status(400).send(ex);
    }
});


app.listen(8002,function(){
console.log("app is running")
})
