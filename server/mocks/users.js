module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();


  usersRouter.get('/', function(req, res) {
    var db = req.db;
    if(req.query.username){
      var query = null;
      query = {'username' : req.query.username};
      db.find('users', query, db, res);
    } else {
      db.find('users', null, db, res);
    }
  });

  usersRouter.get('/:id?', function(req, res) {
    var db = req.db;
    db.findById('user',db, req.params.id, res);
  });

  usersRouter.post('/', function(req, res) {
    var db = req.db;
    db.insertWithSeq('user', db, res, req.body.user);
  });

  usersRouter.delete('/:id', function(req, res) {
    var db = req.db;
    db.delete('user', req.params.id, db, res);
  });

  usersRouter.put('/:id', function(req, res) {
    var db = req.db;
    db.put('user', db,  res, req);
  });

  app.use('/api/users', usersRouter);
};
