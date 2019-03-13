var express = require("express")
var app = express()
app.use(express.static("public"))
app.get("/", function(req,res){
    res.render("landingPage.ejs");
    console.log("User made request to home")
});

app.get("/table", function(req,res){
    res.render("index.ejs");
    console.log("User made request to table page")
});

app.get("/sectionSelection", function(req,res){
    res.render("sectionSelectionPage.ejs");
    console.log("User made request to table page")
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED")
});