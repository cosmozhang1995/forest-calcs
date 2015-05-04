var express = require('express');
var app = express();
var fs = require('fs');

app.all(/\/[\w\/]*\.[(html)(css)(js)]/, function(req, res) {
	res.send(fs.readFileSync('.' + req.path));
});
app.all(/\/[\w\/]*\.\w+/, function(req, res) {
	res.send(fs.readFileSync('.' + req.path));
});
// app.all(/\/[\w\/]*/, function(req, res) {
// 	res.send(fs.readFileSync('./index.html'));
// });
app.all('/', function(req, res) {
	res.send("" + fs.readFileSync('./index.html'));
});

app.listen(3000);