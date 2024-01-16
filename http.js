let http = require('http');
let fs = require('fs');

serveText('Hello world');

// Test webserver
function serveText(theText) {
    http.createServer(function(req, res) {
        console.log('the text was served');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(theText);
        res.write(', eat more lunch');
        res.end();
    }).listen(3000);
}