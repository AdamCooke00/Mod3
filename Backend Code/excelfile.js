//Setting up mongoose for database
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/ExcelData', { useNewUrlParser: true });

//schema for each section
var sectionSchema = new mongoose.Schema({
      
  Monday:{
      index:[Array],
      code:[Array],
      type:[Array]
     },
  Tuesday:{ 
      index:[Array],
      code:[Array],
      type:[Array]
  },
  Wednesday:{ 
      index:[Array],
      code:[Array],
      type:[Array]
  },
  Thursday:{ 
      index:[Array],
      code:[Array],
      type:[Array]
  },
  Friday:{ 
      index:[Array],
      code:[Array],
      type:[Array]
  }
    
});

var sections = mongoose.model("sections", sectionSchema);

//Variables
var fs = require("fs");
var xlsx = require('node-xlsx');
var xlsFile ='public/Section01Timetable.xlsx'
var Monday = {index:[],code:[],type:[]}
var Tuesday = {index:[],code:[],type:[]}
var Wednesday = {index:[],code:[],type:[]}
var Thursday = {index:[],code:[],type:[]}
var Friday = {index:[],code:[],type:[]}
var m = 0
var t = 0
var w = 0
var th = 0
var f = 0
var x = 0

//check for file
fs.exists(xlsFile, function(exists){
  if (exists) {
    console.log("File is loaded");
  } else {
    console.log('File does not exist');
  }
});

//turn file into object
var sec0 = xlsx.parse(xlsFile); 

//run through the whole file sorting data
for (var i =1 ; i<(sec0[0].data.length);i++){
  
      //takes the extra column out of the data
      if(sec0[0].data[i].length > 5){
        sec0[0].data[i].pop()
      }
      
     //properly formats the data lengths and start time indexes
      sec0[0].data[i][1]*=24;
      sec0[0].data[i][2]*=24;
      sec0[0].data[i][2] = sec0[0].data[i][2]-sec0[0].data[i][1]
      sec0[0].data[i][3] = sec0[0].data[i][3].slice(5)
      sec0[0].data[i][1] -= 7.5
  
      //fixes time issues
      if(sec0[0].data[i][1]<0){
        sec0[0].data[i][1]+=12;
      }
      
      // checks to see if length of class is 2hrs, turns into 2 items
      if(sec0[0].data[i][2]==2){
        sec0[0].data.splice(i,0,[
          sec0[0].data[i][0],
          sec0[0].data[i][1],
          sec0[0].data[i][2],
          sec0[0].data[i][3],
          sec0[0].data[i][4]
          ])
          i++
      }
      // checks to see if length of class is 3hrs, turns into 2 items
      if(sec0[0].data[i][2]==3){
        sec0[0].data.splice(i,0,[
          sec0[0].data[i][0],
          sec0[0].data[i][1],
          sec0[0].data[i][2],
          sec0[0].data[i][3],
          sec0[0].data[i][4]
          ])
          i++
          x = i
      }
}
// adds 3rd element for classes that are 3hrs in length 
if(sec0[0].data[x][2]==3){
        sec0[0].data.splice(x,0,[
          sec0[0].data[x][0],
          sec0[0].data[x][1],
          sec0[0].data[x][2],
          sec0[0].data[x][3],
          sec0[0].data[x][4]
          ])
      }

//runs through past object and puts data into final required format
for (var i =1 ; i<(sec0[0].data.length);i++){
  
  //looks for where day is "Mon" and creates object
  if(sec0[0].data[i][0]=="Mon"){
    Monday.index[m]= sec0[0].data[i][1]
    Monday.code[m]= sec0[0].data[i][3]
    Monday.type[m]= sec0[0].data[i][4]
    
    //makes sure that multiple hour classes have different indexes
    if (Monday.index[m]<=Monday.index[m-1]){
      console.log('it was triggered')
      Monday.index[m]++
    }
    m++
  }
  else if(sec0[0].data[i][0]=="Tue"){
    Tuesday.index[t]= sec0[0].data[i][1]
    Tuesday.code[t]= sec0[0].data[i][3]
    Tuesday.type[t]= sec0[0].data[i][4]
    
    if (Tuesday.index[t]<=Tuesday.index[t-1]){
      console.log('it was triggered')
      Tuesday.index[t]++
    }
    t++
  }
  else if(sec0[0].data[i][0]=="Wed"){
    Wednesday.index[w]= sec0[0].data[i][1]
    Wednesday.code[w]= sec0[0].data[i][3]
    Wednesday.type[w]= sec0[0].data[i][4]
    
    if (Wednesday.index[w]<=Wednesday.index[w-1]){
      console.log('it was triggered')
      Wednesday.index[w]=Wednesday.index[w-1]+1
    }
    w++
  }
  else if(sec0[0].data[i][0]=="Thu"){
    Thursday.index[th]= sec0[0].data[i][1]
    Thursday.code[th]= sec0[0].data[i][3]
    Thursday.type[th]= sec0[0].data[i][4]
    
    if (Thursday.index[th]<=Thursday.index[th-1]){
      console.log('it was triggered')
      Thursday.index[th]=Thursday.index[th-1]+1
    }
    th++
  }
  else{
    Friday.index[f]= sec0[0].data[i][1]
    Friday.code[f]= sec0[0].data[i][3]
    Friday.type[f]= sec0[0].data[i][4]
    
    if (Friday.index[f]<=Friday.index[f-1]){
      console.log('it was triggered')
      Friday.index[f]=Friday.index[f-1]+1
    }
    f++
  }
}
console.log(Section00)

/*sections.create(Section00, function(err,created){
    if (err){
        console.log("i fucked up")
        console.log(err)
    }
    else{
        console.log(sections)
    }
});*/

var Section00 = new sections({
     Monday:{
      index:Monday.index,
      code:Monday.code,
      type:Monday.type
     },
  Tuesday:{ 
      index:Tuesday.index,
      code:Tuesday.code,
      type:Tuesday.type
  },
  Wednesday:{ 
      index:Wednesday.index,
      code:Wednesday.code,
      type:Wednesday.type
  },
  Thursday:{ 
      index:Thursday.index,
      code:Thursday.code,
      type:Thursday.type
  },
  Friday:{ 
      index:Friday.index,
      code:Friday.code,
      type:Friday.type
  }
    
  });
  Section00.save(function(err,yes){
    if(err){
      console.log("it didnt work")
      console.log(err)
    }
    else{
      console.log("it worked")
      console.log(yes)
    }
  });
  