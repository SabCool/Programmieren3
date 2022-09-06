const express = require("express");
const app = express();

app.get("/", function (req, res){
    res.send("<h1>Hello world...</h1>");
});

app.get("/name/:name", function(req, res){
    let name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
 });

 app.get("/google/:search", function(req, res){
    let searchParam = req.params.search;
    res.redirect('https://google.com/search?q='+searchParam);
    // res.send("<h1>Hello " + searchParam +"</h1>");
 });

 app.get("/*", function(req, res){
    res.status(404).send('Sorry, we cannot find that!');
 });
 
 

app.listen(3000, function(){
    console.log("Example running on port 3000....");
});