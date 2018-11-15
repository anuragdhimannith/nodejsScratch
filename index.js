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
 var parsedUrl = url.parse(req.url, true);
 
 // Get the path
 var path = parsedUrl.pathname;
 var trimmedPath = path.replace(/^\/+|\?+$/g, '');
 //Send the response 


 // Log the request path 

 console.log('Request recieved on the path : ' +trimmedPath)

    res.end("Hello world\n");
 });

 // Start thr server , and have it listen on port 3000 

 server.listen(3000,function() {
     console.log("The server is listening onport 3000 now");
 });
