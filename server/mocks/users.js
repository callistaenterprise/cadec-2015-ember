module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  var findById = function(db, id, res){
    db.collection('users').findById(id, function(err, result) {
      if(result !== null){
        res.json({ user:result });
      } else {
        res.send({ user:'' });
      }
    });
  }

  usersRouter.get('/', function(req, res) {
    var db = req.db;
    db.collection('users').find().toArray(function (err, items) {
      res.json({'users':items});
    });
  });
  usersRouter.get('/:id?', function(req, res) {
    var db = req.db;
    findById(db, req.params.id, res);
  });
  usersRouter.post('/', function(req, res) {
    var db = req.db;
    db.collection('users').insert(req.body, function(err, result){
      if(result !== null && result.length > 0){
        res.json({ user:result[0]});
      } else {
        res.send({ user:'' });
      }
    });
  });
  usersRouter.delete('/:id', function(req, res) {
    var db = req.db;
    var userToDelete = req.params.id;
    db.collection('users').removeById(userToDelete, function(err, result) {
      res.send((result === 1) ? {  } : { msg:'error: ' + err });
    });
  });
  usersRouter.put('/:id', function(req, res) {
    var db = req.db;
    if(req.body){
      if(req.body._id){
        delete req.body._id;
      }
      db.collection('users').updateById(req.params.id, {$set:req.body}, {safe:true, multi:false}, function(e, result){
        findById(db, req.params.id, res);
      })
    } else {
      res.send({ user:'' });
    }
  });

  app.use('/api/users', usersRouter);
};
