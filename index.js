/*
*
* Primary file for the API
*
*/


//Depedencies
var http = require('http'); 
var url = require('url');


// The server should respond to all request with string
 var server = http.createServer(function (req, res) {

 // Get the url and parse it
 
 // Get the path

 //Send the response

 // Log the request path 
 
    res.end("Hello world\n");
 });

 // Start thr server , and have it listen on port 3000 

 server.listen(3000,function() {
     console.log("The server is listening onport 3000 now");
 });
