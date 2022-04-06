const mongoose=require('mongoose');
//mongoose.connect('mongodb+srv://userone:userone@cluster0.dxn2z.mongodb.net/mainproject?retryWrites=true&w=majority' ,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },()=>{console.log("connected to quiz")});
mongoose.connect('mongodb+srv://userone:userone@cluster0.elmop.mongodb.net/Quiz?retryWrites=true&w=majority' ,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },()=>{console.log("connected to quiz")}); 
const Schema=mongoose.Schema;
var QuizSchema = new Schema({
    quizname:String,
    quizdes:String,
    email:String
    
})

var quizdata=mongoose.model('quiz',QuizSchema);
module.exports=quizdata;
