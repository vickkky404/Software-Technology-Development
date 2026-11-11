const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;


// Create a server req = it takes the request and res = it takes the response
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url );

    const extName = String(path.extname(filePath)).toLowerCase();

    //make the server support all this file types.
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
    }

    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<h1>404 Not Found Bro.</h1>', 'utf-8');
            }
        }else {
            res.writeHead(200, {'Content-Type': mimeTypes[extName] || 'application/octet-stream'});
            res.end(content, 'utf-8');
        }

    })
 });

// Listen to the server on port 3000(opening the port on the server as 3000, it can be changed )
server.listen(port, ()  => {
    console.log(`server is listening on port ${port}`)
})