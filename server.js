const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Welcome to the home page')
    }
    else if(req.url === '/about') { 
        res.end("a short history about us")
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>we cant find the page</p>
        <a href="/">go to home</a>`
        )
    }
})

server.listen(5000);