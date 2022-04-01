const express = require('express');
const mongoose = require('mongoose');
const Questiondata = require('./src/model/Questiondata');
const quizdata = require('./src/model/quizdata');
const userdata = require('./src/model/userdata')
var bodyParser = require('body-parser')
var cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  if (!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}


app.post('/add', verifyToken, (req, res) => {
  console.log(req.body);

  var question = {
    question: req.body.question.question,
    option1: req.body.question.option1,
    option2: req.body.question.option2,
    option3: req.body.question.option3,
    option4: req.body.question.option4,
    answer: req.body.question.answer

  }

  var question = new Questiondata(question);
  question.save();
})
app.post('/quiz', verifyToken, (req, res) => {
  console.log(req.body);

  var quiz = {
    quizname: req.body.quiz.quizname,
    quizdes: req.body.quiz.quizdes
  }
  var quiz = new quizdata(quiz);
  console.log(quiz)
  quiz.save();
  // console.log (req.body.quiz)

})

app.get('/question', verifyToken, (req, res) => {
  Questiondata.find()
    .then(function (question) {
      res.send(question);
    });
})

app.delete('/remove/:id', (req, res) => {
  id = req.params.id;
  Questiondata.findByIdAndDelete({ "_id": id })
    .then(() => {
      console.log('success')
      res.send();
    })
})

app.post('/registerTr', (req, res) => {
  console.log(req.body);

  var user = {
    fullname: req.body.fullname,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    role: "teacher"
  }
  var user = new userdata(user);
  console.log(user)
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
      res.json({ msg: "some error!" });
    }
    else {
      let payload = { subject: registeredUser._id }
      let token = jwt.sign(payload, 'secretkey')
      res.status(200).json({ token: token })
    }
  });
  // console.log (req.body.quiz)

})

app.post('/registerSt', (req, res) => {
  console.log(req.body);

  var user = {
    fullname: req.body.fullname,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    role: "student"
  }
  var user = new userdata(user);
  console.log(user)
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
      res.json({ msg: "some error!" });
    }
    else {
      let payload = { subject: registeredUser._id }
      let token = jwt.sign(payload, 'secretkey')
      res.status(200).json({ token: token })
    }
  });
  // console.log (req.body.quiz)

})

app.post('/login', (req, res) => {
  

  // console.log(req.body.email);
  userdata.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err)
      res.json({ msg: "Something went wrong" });
    }
    else {
      if (!user) {
        console.log("Invalid Email!!")
        res.json({ msg: 'Invalid Email!!' })
      }
      else {
        // console.log(req.body.password)
        // console.log(user.password)
        
        bcrypt.compare(req.body.password, user.password).then(match => {
          if (match) {
            console.log("login success");
            let payload = { subject: user._id, email: user.email }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).json({ token: token, role: user.role, blocked: user.blocked })
          }
          else {
            console.log("Incorrect password");
            res.json({ msg: 'Incorrect password!!' })
          }
        }).catch(err => {
          console.log("Something wrong -" + err);
          res.json({ msg: 'Somthing wrong - ' + err })
        })
      }
    }
  })
})

app.listen(3000, () => {
  console.log("port 3000")
})
