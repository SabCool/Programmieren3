const express = require("express");
const app = express();

app.use(express.static("../gol"));

app.get("/", function(req, res){
    res.redirect("index.html");
});

app.get("/name/:name", function(req, res){
    let name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
 });

app.get("/google/:search", function(req, res){
    console.log(req.param.search);
    res.redirect("https://google.com");
    // res.redirect(""+req.param.search);
})

app.get("/*", function(req, res){
    res.status(404).send('Sorry, we cannot find that!')
});
 

app.listen(3000, function (){
    console.log("Server listen on port 3000");
});