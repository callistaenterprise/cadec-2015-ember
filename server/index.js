module.exports = function(app) {
  var globSync = require('glob').sync;
  var bodyParser = require('body-parser');
  var mocks = globSync('./mocks/**/*.js', {cwd: __dirname}).map(require);
  var proxies = globSync('./proxies/**/*.js', {cwd: __dirname}).map(require);
  var data = globSync('./data/**/*.js', {cwd: __dirname}).map(require);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Database
  var mongo = require('mongoskin');
  ObjectID = require('mongoskin').ObjectID
  var db = mongo.db("mongodb://localhost:27017/cadec-2015", {native_parser: true});

  db.getNextSequence = function(name, callback) {
    console.log("next sequence :" + name);
    var ret = db.collection('counters').findAndModify(
      {_id:name},
      [],
      {$inc : { seq: 1 }},
      true,
      true,
      callback
    );
  };

  db.insertWithSeq = function(name, db, res, body) {
    db.getNextSequence(name + "sid", function(err, counter) {
      var id = counter.seq;
      body._id = id + "";
      db.collection(name + 's').insert(body, function(err, result) {
        if (result !== null && result.length > 0) {
          var obj = {};
          obj[name] = _idToId(result[0]);
          res.json(obj);
        } else {
          var obj = {};
          obj[name] = '';
          res.json(obj);
        }
      });

    });
  };

  db.findById = function(name, db, id, res){
    db.collection(name + 's').findById(id, function(err, result) {
      if(result !== null){
        var obj ={};
        obj[name] = _idToId(result);
        res.json(obj);
      } else {
        var obj ={};
        obj[name] = ''
        res.send(obj);
      }
    });
  };

  db.find = function(name, query, db, res){
    if(query){
      db.collection(name).find(query).toArray(function (err, items) {
        obj = {};
        obj[name] = _idToId(items);
        res.json(obj);
      });
    } else {
      db.collection(name).find().toArray(function (err, items) {
        obj = {};
        obj[name] = _idToId(items);
        res.json(obj);
      });
    }
  }

  db.put = function(name, db, res, req){
    if(req.body && req.body[name]){
      var payload = req.body[name];
      console.log("payload" + JSON.stringify(payload));
      if(payload._id){
        delete payload._id;
      }
      var pluralize = name + 's';
      db.collection(pluralize).updateById(req.params.id, {$set:payload}, {safe:true, multi:false}, function(e, result){
        db.findById(name, db, req.params.id, res);
      })
    } else {
      var obj = {};
      obj[name] = '';
      res.send(obj);
    }
  }

  db.delete = function(name, id,  db, res){
    db.collection(name + 's').removeById(id, function(err, result) {
      res.send((result === 1) ? {  } : { msg:'error: ' + err });
    });
  }

  _idToId = function(objects){
    if(objects) {
      var convertId = function(object){
        if (object._id) {
          object.id = object._id;
          delete object._id;
        }
      }
      if(objects instanceof Array) {
        objects.forEach(function(object) {
          convertId(object);
        });
        return objects;
      } else {
        convertId(objects);
        return objects;
      }
    } else {
      return objects;
    }
  };

  app.use(function(req, res, next) {
    req.db = db;
    next();
  });

  mocks.forEach(function(route) {
    route(app);
  });

  // proxy expects a stream, but express will have turned
  // the request stream into an object because bodyParser
  // has run. We have to convert it back to stream:
  // https://github.com/nodejitsu/node-http-proxy/issues/180
  app.use(require('connect-restreamer')());
  proxies.forEach(function(route) {
    route(app);
  });
};
