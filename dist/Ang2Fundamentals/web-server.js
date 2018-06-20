var express= require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var rootPath = path.normalize(__dirname);
app.use(express.static(rootPath));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended:true}));
app.all("*",function(req,res){
  res.status(200).sendFile(__dirname + 'index.html');
});
app.listen(process.env.PORT || 8000);
console.log("Listening on port " + process.env.PORT + "...");
