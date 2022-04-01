const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.elmop.mongodb.net/Quiz?retryWrites=true&w=majority',()=>{console.log("connected to user")});
const Schema=mongoose.Schema;
var NewUserSchema = new Schema({
    fullname:String,
    phonenumber:Number,
    email:String,
    password:String,
    role:String
})

var userdata=mongoose.model('user',NewUserSchema);
module.exports=userdata;
