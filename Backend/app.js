const express = require('express');
const mongoose = require('mongoose');
const Questiondata = require('./src/model/Questiondata');
const quizdata = require('./src/model/quizdata');
const userscoredata = require('./src/model/userscoredata');
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
  // console.log('token');console.log(token);
  let payload = jwt.verify(token, 'secretkey')
  // console.log('payload');console.log(payload);
  if (!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  req.email = payload.email
  next()
}

app.post('/add', verifyToken, (req, res) => {

  // console.log("Before");
  // console.log(req.body);

  var question = {
    quizid: req.body.question.quizid,
    question: req.body.question.questionItem.question,
    option1: req.body.question.questionItem.option1,
    option2: req.body.question.questionItem.option2,
    option3: req.body.question.questionItem.option3,
    option4: req.body.question.questionItem.option4,
    answer: req.body.question.questionItem.answer

  }
  // console.log(question);
  var question = new Questiondata(question);
  // console.log(question);
  question.save();
})


app.post('/quiz', verifyToken, (req, res) => {
  // console.log("userdata.email"); console.log(userdata.email);
  // // console.log(req.body);
  //console.log("Req email"); console.log(req.email);

  var quiz = {
    quizname: req.body.quiz.quizname,
    quizdes: req.body.quiz.quizdes,
    email: req.email

  }
  //console.log(quiz)
  var quiz = new quizdata(quiz);
  console.log(quiz)
  quiz.save();
  // console.log (req.body.quiz)

})

app.get('/homequiz', verifyToken, (req, res) => {
  quizdata.find()
    .then(function (quiz) {
      res.send(quiz);
      // console.log(quiz)
    })
})


app.delete('/removequiz/:id', verifyToken, (req, res) => {
  id = req.params.id;
  quizdata.findByIdAndDelete({ "_id": id })
    .then(() => {
      console.log('quiz delete success')
      res.send();
    })
})

app.get('/question/:quizid', verifyToken, (req, res) => {
  // console.log("req"); console.log(req);
  quizid = req.params.quizid;
  // console.log("this.quizid"); console.log(quizid);
  // console.log("Questiondata"); console.log(Questiondata);
  Questiondata.find({ "quizid": quizid })
    .then(function (question) {
      res.send(question);
    });
})


app.get('/questions', verifyToken, (req, res) => {
  Questiondata.find()
    .then(function (question) {
      res.send(question);
    });
});

app.delete('/remove/:id', verifyToken, (req, res) => {
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
            res.status(200).json({ token: token, role: user.role, blocked: user.blocked, email: user.email })
          }
          else {
            console.log("Incorrect password");
            res.json({ msg: 'Incorrect password!!' })
          }
        }).catch(err => {
          console.log("Something wrong -" + err);
          res.json({ msg: 'Something wrong - ' + err })
        })
      }
    }
  })
})

app.get('/seeteacher', (req, res) => {
  userdata.find({ role: "teacher" }, (err, usr) => {
    if (err) {
      console.log(error);
      res.json({ msg: "some error!" });
    }
    else {
      res.json({ user: usr });
    }
  })
})

app.post('/userscore', verifyToken, (req, res) => {
  // console.log("Save Score: req.body"); console.log(req.body);
  var timestamp = new Date();

  var userscore = {
    quizid: req.body.userscore.quizid,
    email: req.email,
    score: req.body.userscore.score,
    datestamp: timestamp

  }
  // console.log("userscore:");console.log(userscore);

  var userscore = new userscoredata(userscore);
  // console.log("userscore:"); console.log(userscore);
  userscore.save();
})

app.get('/getqn/:id', (req, res) => {
  const id = req.params.id;

  var question = {
    quizid: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }
  Questiondata.findOne({ "_id": id })
    .then((question) => {
      res.send(question);
    });
  console.log(question);
})

app.put('/editqn', verifyToken, (req, res) => {
  console.log("Edit ReqBody:"); console.log(req.body)
    id = req.body._id,
    quizid = req.body.quizid,
    question = req.body.question,
    option1 = req.body.option1,
    option2 = req.body.option2,
    option3 = req.body.option3,
    option4 = req.body.option4,
    answer = req.body.answer,

    Questiondata.findByIdAndUpdate(
      {
        "_id": id
      },
      {
        $set: {
          "quizid": quizid,
          "question": question,
          "option1": option1,
          "option2": option2,
          "option3": option3,
          "option4": option4,
          "answer": answer
        }
      })
      .then(function () {
        res.send();
      })
})

app.get('/result', verifyToken, (req, res) => {
  userscoredata.find()
    .then(function (userscore) {
      res.send(userscore);
      // console.log(userscore)
    })
})

app.listen(3000, () => {
  console.log("port 3000")
})
