const express = require("express");
const bodyParser = require("body-parser")
const fetch = require('node-fetch');
const { json } = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
  // res.sendFile(__dirname + "/index.html")
  
fetch('https://coronavirus-19-api.herokuapp.com/countries')
.then(res => res.json())
.then(json => res.render('list',{countryName:json[2].country,
  noOfCases:json[2].cases,
  noOfDeaths:json[2].deaths,
  noOfRecoveries:json[2].recovered,
  noOfActiveCases:json[2].active,
  noOfCasesToday:json[2].todayCases,
  noOfDeathsToday:json[2].todayDeaths}))
// console.log(json);


  

})

// app.post("/",function(req,res){
 
//   const url = "https://coronavirus-19-api.herokuapp.com/countries"
//   https.get(url,function(response){
//     response.on("data",function(data){
//       console.log(JSON.parse(data))
    
//     })
//   }) 
// })



app.listen(process.env.PORT || 3000,function(req,res){
  console.log("server is up and running")
})