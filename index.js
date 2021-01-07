// const express = require("express");
// const app = express();
// app.get(' / ', function(req, res) => {
//     res.send("hello Mohit");

// });
// app.listen(3000, () => console.log("server is running.."));

const express = require('express')
const app = express()
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`server is running........${port}`)
})



const http = require("http");
const server = http.createServer(function(req, res) {
    //res.writeHead(200, { "content-type": "text/html" })
    res.write("<h1>node js is running.....</h1>");
    res.write("<h2>node js is running.....</h2>");
    res.write("<h3>node js is running.....</h1>");
    res.write("<h4>node js is running.....</h1>");
    res.end();
}).listen(3000, () => console.log("server is running......"));