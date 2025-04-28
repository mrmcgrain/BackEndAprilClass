const http = require('http');
const fs = require('fs')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type' : 'text/plain'})
//     res.end("Hello World");

// })

const server = http.createServer((req, res) => {
    console.log("REQ", req)
    if (req.url === '/') {
        fs.writeFile('data.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log('File data:', data);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Welcome to the root route!');
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});
  

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
})