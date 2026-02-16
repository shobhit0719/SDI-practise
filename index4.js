var express = require("express");

var app = express();



app.use(express.json());
let users=[
    {id:1,name:'Harshit',age:20},
    {id:2,name:'Rahul',age:22},
    {id:3,name:'Ankit',age:21}  
]
app.post("/users",(req,res)=>{
    const newUser = {
        id:users.length +1,
        name:req.body.name,
        age:req.body.age
    }
    users.push(newUser);
    res.status(201).send(newUser);
})
app.get('/users/:id',(req,res)=>{
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(user) {
        res.send(user);
    } else {
        res.status(404).send({message: "User not found"});
    }
    res.send(user);
});
app.get("/users",(req,res)=>{
    res.send(users);
});


//update user
app.put('/users/:id',(req,res)=>{
    const user = users.find(u => u.id === parseInt(req.params.id));     
    if(user) {
        user.name = req.body.name || user.name;
        user.age = req.body.age || user.age;
        res.send(user);
    } else {
        res.status(404).send({message: "User not found"});
    }   
});
//delete user
app.delete('/users/:id',(req,res)=>{
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if(userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.send(deletedUser[0]);
    } else {
        res.status(404).send({message: "User not found"});
    }
});

app.listen(9000,()=> console.log("API stared listening"));