const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer( (req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            fs.readFile(path.join('static', 'index.html'), (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end('error 404')
                }
                else {
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.end(data);
                }
            });
        }
        else {
            console.log('not /');
            res.end('not /')
        }
    }
} );

server.listen(3000, () => {
    console.log('Server started!');
})
