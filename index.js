var express = require("express")
var app = express();
app.get('/',function(req,resp){
    resp.send("welcome to Rest API")
});
app.listen(9000,()=>console.log("API started listening"));
app.listen(8000,()=>console.log("API not listening"));