var express=require("express");
var app=express();
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home.ejs");
})
app.get("/members",function(req,res){
    res.render("team.ejs");
})
app.get("/gallery",function(req,res){
    res.render("gallery.ejs");
})
app.get("/developers",function(req,res){
    res.render("developers.ejs");
})
app.get("/resources",function(req,res){
    res.render("resources.ejs");
})
app.get("/1stsemester.html",function(req,res){
    res.render("1stsemester.ejs");
})
app.get("/2ndsemester.html",function(req,res){
    res.render("2ndsemester.ejs");
})
app.get("/3rdsemester.html",function(req,res){
    res.render("3rdsemester.ejs");
})
app.get("/4thsemester.html",function(req,res){
    res.render("4thsemester.ejs");
})
app.get("/5thsemester.html",function(req,res){
    res.render("5thsemester.ejs");
})
app.get("/6thsemester.html",function(req,res){
    res.render("6thsemester.ejs");
})
app.get("/7thsemester.html",function(req,res){
    res.render("7thsemester.ejs");
})
app.get("/8thsemester.html",function(req,res){
    res.render("8thsemester.ejs");
})

app.get("/spectrum",function(req,res){
    res.render("coming soon.ejs");
})

app.get("/spectre",function(req,res){
    res.render("coming soon.ejs");
})


app.listen(process.env.PORT,function(req,res){
    console.log("Server has started")
})

// app.listen(3000,function(req,res){
//     console.log("Server has started")
// })