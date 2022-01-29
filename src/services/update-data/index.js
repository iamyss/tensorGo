const request = require("request");
var express = require("express");
const app = express();
var UserModel = require('./user');
var config = require('../config');
const mongoose = require('mongoose');
const user = require("../get-data/user");
const router = express.Router();

mongoose.connect(
    config.MONGO_URL, {
    useNewUrlParser: true
}
);

app.use(express.json({
    limit: '100mb'
}))


app.post("/updatedata", async (req, res, next) => {
    try {
        console.log('body',req.body);
        let UserId = req.body._id;
        let updates = {
            Name: req.body.Name,
            Email: req.body.Email,
            Gender: req.body.Gender,
            Status: req.body.Status
        };
        let output = await UserModel.findByIdAndUpdate(UserId,updates)
        res.status(200).send(output);
    } catch (ex) {
        console.log(ex);
        res.status(400).send(ex);
    }
});


app.listen(8003, function () {
    console.log("app is running")
})
