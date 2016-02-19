
var express = require('express');
var router = express();
var path = require("path");
var myDate = require("./helper/myDate.js");
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
})
router.get('/demo.html',function(req,res){
  res.sendFile(path.join(__dirname+'/views/demo.html'));
})
router.get('/*',function(req,res){
  var date = req.params[0];
  var regUnix = /^\d+$/;
  var obj;
  var unixDate;
  var natDate;
if(regUnix.test(date)){
  unixDate=date;
  natDate=myDate.naturalDate(date*1000);
  }
  else {
  unixDate=myDate.unixDate(date);
  natDate=myDate.naturalDate(date);
 }
  obj= {"unix":unixDate,"natural":natDate};
  
  res.writeHead(200, {'Content-Type': 'application/json'});
 
  res.end(JSON.stringify(obj));
})
router.listen(process.env.PORT||8000);
