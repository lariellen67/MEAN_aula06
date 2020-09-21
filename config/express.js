var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');

module.exports = function () {
  var app = express();
  var porta = process.env.PORT || 8080;
  app.set('port', porta);

  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  load('models', { cwd: 'app' }).then('controllers').then('routes').into(app);

  return app;
};
