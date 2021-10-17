const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    const query = url.parse(req.url, true);
    const filename = (query.pathname === "/") ? "./index.html" : `./pages${query.path}.html`;

    fs.readFile(filename, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200,
                { 'Content-Type': 'text/html' }
            );
            res.write(data);
            res.end();
        }
    })
}).listen(3000);