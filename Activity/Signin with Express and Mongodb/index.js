const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mongodb = require('mongodb');
const bcrypt = require('bcrypt');
const cors = require('cors');
const saltround = 10;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const url = "mongodb://localhost:27017";

app.post("/signin", (req,res) => {
    var d = req.body
    mongodb.connect(url,{useUnifiedTopology:true},
        (err,user)=>{
            if(err){
                throw err;
            }
            var db = user.db("dash")
            var data = {
                email: d.email
            };
            bcrypt.genSalt(saltround,(err) => {
                if(err){
                    throw err;
                }
                bcrypt.hash(d.password,salt,
                    (err,hash)=>{
                        if(err){
                            throw err;
                        }
                        data.password = hash;
                        db.collection("userdetails").insertOne(data,
                            (err,result)=>{
                                if(err){
                                    throw err;
                                }
                                console.log("user registered");
                                user.close();
                            })
                    })
            })
        })
     })
    app.post("/login",(req,res)=>{
        mongodb.connect(url,{useUnifiedTopology: true},(err,user)=>{
            if(err){
                throw err;
            }
            var db = user.db("dash");
            db.collection("userdetails").findOne({email: req.body.email},
                (err,result)=>{
                    if(err){
                        throw err;
                    }
                    console.log(req.body);
                    bcrypt.compare(req.body.password,result.password,
                        (err,r)=>{
                            if(r){
                                console.log("Login Success");
                            }
                            else{
                                console.log("Login Failed");
                            }
                        })
                })
        })
    })
    app.get("/dashboard",(req, res)=> {
        var token = req.header('Authorization')
        console.log(token);
        if (token == undefined) {
            res.status(401).json({
                message: "unauthorized"
            });
        }
        else {

            var decode = jwt.verify(token, 'abcghimno');
            res.json({
                message: "Authorized"
            });
            console.log("Authorized - ${decode.email}")
            res.sendFile(__dirname+"//dashboard.html");
        }
    })

    app.post("/update",(req,res)=>{
        mongodb.connect(url,{useUnifiedTopology:true},
            (err,user)=>{
                if(err){
                    throw err;
                }
                var db = user.db("dash")
                var newdata = req.body;
                var jdata = newdata.json;
                
                db.collection(email).updateMany({},jdata,(err,result)=>{
                    if(err){
                        throw err;
                    }
                    console.log("db updated");
                })
            })
    })

    app.get("/",(req,res)=>{
        res.sendFile(__dirname+"//login.html");
    })

    app.get("/data",(req,res)=>{
        mongodb.connect(url,{useUnifiedTopology: true,},(err,user)=>{
            if(err){
                throw err;
            }
            let db = user.db("dash")
            let d=db.collection(email).find()
            console.log(d);
            res.send(d);
        })
    })

app.listen(3000,function(){
    console.log("Server running in port 3000...");
})