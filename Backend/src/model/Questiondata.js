const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.elmop.mongodb.net/Quiz?retryWrites=true&w=majority' ,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },()=>{console.log("connected to question")});


const Schema=mongoose.Schema;
var NewQuestionSchema = new Schema({
    quizid:String,
    question:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
    answer:String
})

var Questiondata=mongoose.model('question',NewQuestionSchema);
module.exports=Questiondata;
