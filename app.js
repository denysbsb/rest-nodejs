var express = require('express');
var cors = require('cors');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var routes = require('./routes/index');
var usuarios = require('./routes/usuarios');

//Setup do express
var app = express();

//Para incluir headers por conta do CORS
app.use(cors());

var rdb = require("./models/rdb");
app.rdb = rdb;

//Metodos GET,POST,PUT,DELETE on nodejs
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override '));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', './views');
app.set('view engine', 'pug');


//Routes
app.get('/', function (req, res) {  
    res.render(
        'index',
        { title: 'Restfull em nodejs', message: 'acesse as rotas'})
})

app.use('/api', routes);
app.use('/usuarios', usuarios);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//catch error handler 500
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json(err);
});

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Nodeapp listening at http://%s:%s',host,port);
});

module.exports = app;