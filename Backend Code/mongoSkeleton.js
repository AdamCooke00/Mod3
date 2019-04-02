var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/sportTeams', { useNewUrlParser: true });

var teamSchema = new mongoose.Schema({
    name: String,
    wins: Number,
    losses:Number
});

var team = mongoose.model("team", teamSchema);

//adding new element to database
/*var Warriors = new team({
    name: "Raptors",
    wins: 48,
    losses: 20
})

Warriors.save(function(err,good){
    if(err){
        console.log("Item was NOT added")
    }
    else{
        console.log(good+" was SUCCESSFULLY added")
    }
});*/
team.create({
    name:"Bucks",
    wins: 51,
    losses:17
}, function(err,team){
    if (err){
        console.log(err)
    }
    else{
        console.log(team)
    }
});
//retrieve all the elements and console.log them
team.find({}, function(err,teams){
    if(err){
        console.log("Error")
        console.log(err)
    }
    else{
        console.log("All the teams")
        console.log(teams)
        
    }
});