var mongoose=require('mongoose');
  
var UserSchema = new mongoose.Schema({
    Id:Number,
    Name:String,
    Email:String,
    Gender:String,
    Status:String
});
  
module.exports = mongoose.model(
    'user', UserSchema, 'Users');
