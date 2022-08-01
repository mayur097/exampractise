var express =require("express");
var app=express();

app.get("/",(req,resp)=>{
    resp.send("<h1> Welcome to Northwind MNC </h1>");
});

app.listen(9000);
console.log("listnening on 9000 port");