//https://github.com/ohmiler/mern-stack-crud/blob/main/backend/routes/student.route.js

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const User = require('./models/user')



const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

//https://www.mongodb.com/community/forums/t/any-alternative-for-modelname-find-function-in-mongoose/215543/7
// find all data of database
app.get("/", (req,res)=>{
    User.find().then((err, result) => {
        console.log("result")
        if (err) {
          res.send(err)
        }
        else res.json(result)
    })
})

app.get("/FindID/:id", (req,res)=>{
    User.findById(req.params.id).then((err,data)=>{
        console.log(data);
        if(err) res.send(err)
        else res.json(data)
    })
})

app.get("/hello",(req,res)=>{
    res.json({"anna":"naan"})
    //res.send("hello")
})


// add data to database
app.post('/AddData',(req, res) => {
    User.create(req.body).then((error, data) => {
        if (error) {
            res.send(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
})


app.delete('/Delete/:id',(req, res) => {
    User.findByIdAndRemove(req.params.id).then((error, data) => {
        if (error) {
            res.send(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

app.post('/test',(req,res)=>{
    console.log('req =',req.body)
})

app.put('/Update/:id',(req, res, next) => {
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }).then((error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
            console.log('Student updated successfully');
        }
    })
})

app.listen(4000,()=> console.log('start port 4000'))