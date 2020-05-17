/*
 * Assignment 4,
 *
 * name: Ryan Ho
 * email: hor@oregonstate.edu
 */
var fs= require('fs');
var http= require('http');
var path= require('path');
var indexHtml= fs.readFileSync('./public/index.html','utf8');
console.log("==Read indexHtml");
var indexJs= fs.readFileSync('./public/index.js','utf8');
console.log("==Read indexJs");
var style= fs.readFileSync('./public/style.css','utf8');
console.log("==Read style");
var fourZero= fs.readFileSync('./public/404.html','utf8');
console.log("==Read fourZero");

var server= http.createServer(function(req,res){
  console.log("x");
  if(req.url=="/index.html"){
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.write(indexHtml);
  }
  if(req.url=="/index.js"){
    res.writeHead(200, {
      "Content-Type": "application/javascript"
    });
    res.write(indexJs);
  }
  if(req.url=="/style.css"){
    res.writeHead(200, {
      "Content-Type": "text/css"
    });
    res.write(style);
  }
  if(req.url=="/404.html"){
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.write(fourZero);
  }
  if(req.url=="/"){
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.write(indexHtml);
  }
  else{
    res.writeHead(404, {
      "Content-Type": "text/html"
    });
    res.write(fourZero);
  }
  res.end();
});
server.listen(3000,function(){
  console.log("server is listening on 3000");
});
