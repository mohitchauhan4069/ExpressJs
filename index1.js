const express = require('express')
const app = express();
/*app.get('/', function(req, res) {
    res.send("hello mohit ");
});
app.post('/hello', function(req, res) {
    res.send("hello mohit u are welcome.... ");
});

app.listen(3003);
*/
const courses = require('./course')
app.use('/course', courses);
app.get('/', function(req, res) {
    res.send("welcome to my courses")
});
app.listen(3004);