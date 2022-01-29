const request = require("request");
var express = require("express");
const app= express();
var UserModel = require('./user');
var config = require('./config');
const mongoose = require('mongoose');

mongoose.connect(
    config.MONGO_URL, {
        useNewUrlParser: true
    }
);

app.use('/fetchData',async (req,res)=>{
    const url = "https://gorest.co.in/public-api/users";
    request.get(url, async(error, response, body) => {
    let json = JSON.parse(body);
    let data = Object.values(json.data);
    let list=[];
    for(let obj of data){
      //console.log(obj.name);
      var newUser = new UserModel({Id:obj.id, 
        Name:obj.name, Email:obj.email, Gender:obj.gender,Status:obj.status});
        newUser = await newUser.save()
        list.push(newUser);

    }
    res.status(200).send(list);
});

})

app.listen(8001,function(){
console.log("update is running")
})
