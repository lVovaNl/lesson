// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();

app.use(express.static('lesson'));
// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.get('/', function(req, res) {
  res.sendfile('lesson.css');
});

app.get('/', function(req, res) {
  res.sendfile('lesson.js');
});


// запускаем сервер на порту 8080
app.listen(8080, '192.168.0.121');