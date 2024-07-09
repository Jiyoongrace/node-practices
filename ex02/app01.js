var http = require('http');

var port = 8080;
var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<h1>hello world!</h1>\n');
});

server.listen(port, function () {
    console.log('server running at http://localhost:' + port + '/');
});