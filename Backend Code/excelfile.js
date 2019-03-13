var fs = require("fs");
var xlsx = require('node-xlsx');
var xlsFile ='public/Section01Timetable.xlsx'
var Monday = {start:[],len:[],code:[],type:[]}
var Tuesday = {start:[],len:[],code:[],type:[]}
var Wednesday = {start:[],len:[],code:[],type:[]}
var Thursday = {start:[],len:[],code:[],type:[]}
var Friday = {start:[],len:[],code:[],type:[]}
var Section00 = {Monday,Tuesday,Wednesday,Thursday,Friday}

var m = 0
var t = 0
var w = 0
var th = 0
var f = 0

fs.exists(xlsFile, function(exists){
  if (exists) {
    console.log("File is loaded");
  } else {
    console.log('File does not exist');
  }
});




var sec0 = xlsx.parse(xlsFile); ` `

for (var i =1 ; i<(sec0[0].data.length);i++){
  if(sec0[0].data[i].length > 5){
    sec0[0].data[i].pop()
  }
  sec0[0].data[i][1]*=24;
  sec0[0].data[i][2]*=24;
  sec0[0].data[i][2] = sec0[0].data[i][2]-sec0[0].data[i][1]
  sec0[0].data[i][3] = sec0[0].data[i][3].slice(5)
  
  if(sec0[0].data[i][0]=="Mon"){
    Monday.start[m]= sec0[0].data[i][1]
    Monday.len[m]= sec0[0].data[i][2]
    Monday.code[m]= sec0[0].data[i][3]
    Monday.type[m]= sec0[0].data[i][4]
    m++
  }
  else if(sec0[0].data[i][0]=="Tue"){
    Tuesday.start[t]= sec0[0].data[i][1]
    Tuesday.len[t]= sec0[0].data[i][2]
    Tuesday.code[t]= sec0[0].data[i][3]
    Tuesday.type[t]= sec0[0].data[i][4]
    t++
  }
  else if(sec0[0].data[i][0]=="Wed"){
    Wednesday.start[w]= sec0[0].data[i][1]
    Wednesday.len[w]= sec0[0].data[i][2]
    Wednesday.code[w]= sec0[0].data[i][3]
    Wednesday.type[w]= sec0[0].data[i][4]
    w++
  }
  else if(sec0[0].data[i][0]=="Thu"){
    Thursday.start[th]= sec0[0].data[i][1]
    Thursday.len[th]= sec0[0].data[i][2]
    Thursday.code[th]= sec0[0].data[i][3]
    Thursday.type[th]= sec0[0].data[i][4]
    th++
  }
  else{
    Friday.start[f]= sec0[0].data[i][1]
    Friday.len[f]= sec0[0].data[i][2]
    Friday.code[f]= sec0[0].data[i][3]
    Friday.type[f]= sec0[0].data[i][4]
    f++
  }
  
  
console.log(sec0[0].data[i])
}

console.log(Section00)

//Server Side
//res.render("app.ejs", {Monday, preSet})

//FrontEnd JS
//