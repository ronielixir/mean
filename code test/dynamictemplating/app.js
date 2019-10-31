const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    const message = 'Hello world...';
    html = html.replace('{Message}', message);
    res.end(html);
    
}).listen(1337, '127.0.0.1');