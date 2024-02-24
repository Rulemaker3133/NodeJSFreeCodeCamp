const http = require('http');

// const server = http.createServer((req, res) => { // Creating HTTP server
//     console.log(req);
//     res.write('Welcome to our home page');
//     res.end(); // End of the request
// });

const server = http.createServer((req, res) => { // Creating HTTP server
    if (req.url ==='/') {
        res.end('Welcome to our home page'); 
    }
    if (req.url === '/about') {
        res.end('About text'); 
    }
    res.end(`
    <h1>No Page here...</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Go Home</a>
    `)
});

server.listen(5000) // By using port 5000

// By launching browser at "https://localhost:5000" you will see the message
