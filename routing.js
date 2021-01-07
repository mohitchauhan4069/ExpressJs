const express = require("express");
const app = express();
app.get('/', function(req, res) {
    res.send("hello routhing 0....");
});
app.get('/1', function(req, res) {
    res.send("hello routhing 1....");
});
app.post('/2', function(req, res) {
    res.send("hello routhing 2....");
});
app.all('/3', function(req, res) {
    res.send("hello routhing all ....");
});
app.listen(1222);