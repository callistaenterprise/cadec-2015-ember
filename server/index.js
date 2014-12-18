module.exports = function(app) {
  var globSync   = require('glob').sync;
  var bodyParser = require('body-parser');
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);
  var data    = globSync('./data/**/*.js', { cwd: __dirname }).map(require);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Database
  var mongo = require('mongoskin');
  ObjectID = require('mongoskin').ObjectID
  var db = mongo.db("mongodb://localhost:27017/cadec-2015", {native_parser:true});

  app.use(function(req,res,next){
    req.db = db;
    next();
  });

  mocks.forEach(function(route) { route(app); });

  // proxy expects a stream, but express will have turned
  // the request stream into an object because bodyParser
  // has run. We have to convert it back to stream:
  // https://github.com/nodejitsu/node-http-proxy/issues/180
  app.use(require('connect-restreamer')());
  proxies.forEach(function(route) { route(app); });
};
