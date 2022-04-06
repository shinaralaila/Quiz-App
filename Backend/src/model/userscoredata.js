const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.elmop.mongodb.net/Quiz?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, () => { console.log("connected to question") });

const Schema = mongoose.Schema;
var UserScoreSchema = new Schema({
    quizid: String,
    email: String,
    score: String,
    datestamp: String
})

var userscoredata = mongoose.model('userscore', UserScoreSchema);
module.exports = userscoredata;
