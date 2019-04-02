var express = require("express")
var app = express()
app.use(express.static("public"))
app.get("/", function(req,res){
    res.render("landingPage.ejs");
    console.log("User made request to home")
    res.writeHead(200, {'Content-Type': 'text/plain'});
    listen(8080);
console.log('Server running at http://localhost:8080/');
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