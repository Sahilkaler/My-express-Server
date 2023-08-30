const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("hello");
});

app.get("/contact",function(req,res){
    res.send("<h1>Contact me at: sahilkaler12344@gmail.com</h1>");
});

app.get("/about",function(req,res){
    res.send("<p>Hello my name is Sahil Kaler. I'm a freshman in Computer Science and Engineering.I have keen intersets in Tech and i like to learn new things.</p>");
});

app.get("/hobbies",function(req,res){
    res.send("<ul><li>Poetry</li><li>Anime Manga enthu</li></ul>");
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});