const res = require("express/lib/response");

const movieList=(req,res)=>{
  const movieName=["A perfect Pairing","Senior Year","Jackass 4.5","Dangerous","Sonic the Hedgedog","Top Gun","Cleveland Abduction","Turbo"];
 res.send(movieName);
}
module.exports.movieList=movieList;

const moviesOfList=(req,res,indexNumber)=>{
  const movieName=["A perfect Pairing","Senior Year","Jackass 4.5","Dangerous","Sonic the Hedgedog","Top Gun","Cleveland Abduction","Turbo"];
  var i =req.params.indexNumber;
  var j =i-1;
  if(i<=movieName.length){
    res.send(movieName[j])
  }else{
    res.send("Invalid List")
  }
}
module.exports.moviesOfList=moviesOfList;

const movieComp =(req,res)=>{
  const movieComp = [{Name:"A perfect pairing",id:1},{Name:"Senior Year",id:2},{Name:"Jackass 4.5",id:3},{Name:"Dangerous",id:4},{Name:"Sonic the Hedgehog",id:5}];
  res.send(movieComp);
}
module.exports.movieComp=movieComp;


