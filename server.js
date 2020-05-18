/*
 * Assignment 4
 *
 * name: Ryan Ho
 * email: hor@oregonstate.edu
 */
var fs= require('fs');
var http= require('http');
var path= require('path');

var indexJs= fs.readFileSync("./public/index.js",'utf8');
console.log("read JS");
var style= fs.readFileSync("./public/style.css",'utf8');
console.log("read STYLE");

var indexHtml= fs.readFileSync("./public/index.html",'utf8');
console.log("read indexHTML");
var fourZero= fs.readFileSync("./public/404.html",'utf8');
console.log("read 404");


var server = http.createServer(function (req, res) {

  console.log("== Got a request");
  console.log("  -- HTTP method:", req.method);
  console.log("  -- Resource:", req.url);
  console.log("  -- Headers:", req.headers);

  if(req.url==="/style.css"){
    res.writeHead(200, {
      "Content-Type": "text/css"
    });
    res.write(style);
  }
  if(req.url==="/index.js"){
    res.writeHead(200, {
      "Content-Type": "application/javascript"
    });
    res.write(indexJs);
  }
  if(req.url==="/index.html"||req.url==="/"){
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.write(indexHtml);
  }
  if(req.url==="/404.html"){
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.write(fourZero);
  }
  if(req.url!=="404.html"&&req.url!=="/index.html"&&req.url!=="/"&&req.url!=="/style.css"&&req.url!=="/index.js"){
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
