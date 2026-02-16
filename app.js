const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(bodyParser.json());

const PORT = 4000;
const SECERET_KEY = "myseceret123";



const users = [
    {id:1,username:"admin",password:"1234"},
    {id:2,username:"admin2",password:"abcd"}
];

app.post("/login",(req,res) => {
    const{username,password} = req.body;


    const user = users.find(
        u => u.username === username && u.password === password

    );



    if(!user){
        return res.status(401).json({message:"Incvalid credential"});
    }


    const token = jwt.sign(
        {id:user.id, username:user.username},
        SECERET_KEY,
        {expiresIn:"1h"}
    );

    res.json({token});
});

function verifyToken(req,res,next){
    const header = req.headers["authorization"];

    if(!header)
        return res.status(403).json({message: "token missing"});

    const token = header.split(" ")[1];

    jwt.verify(token, secret_key, (err, decoded)=>{
        if(err) return res.status(401).json({message: "Invalid Token"});

        req.user = jwt.decoded;
        next();
    });
}


app.get("/dashboard", verifyToken,(req,res)=>{
    res.json({
        message:"welcome Dashboard",
        user:req.user
    });
});

app.listen(PORT, ()=>{
    console.log(`server security runnign on port ${PORT}`);
});


