module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  var findById = function(db, id, res){
    db.collection('posts').findById(id, function(err, result) {
      if(result !== null){
        res.json({ post:result });
      } else {
        res.send({ post:'' });
      }
    });
  }

  postsRouter.get('/', function(req, res) {
    var db = req.db;
    if(req.query.user_id){
      var query = {'userId' : req.query.user_id};
      db.collection('posts').find(query).toArray(function (err, items) {
        res.json({'posts':items});
      });
    } else {
      db.collection('posts').find().toArray(function (err, items) {
        res.json({'posts':items});
      });
    }

  });
  postsRouter.get('/:id?', function(req, res) {
    var db = req.db;
    findById(db, req.params.id, res);
  });
  postsRouter.post('/', function(req, res) {
    var db = req.db;
    db.collection('posts').insert(req.body, function(err, result){
      if(result !== null && result.length > 0){
        res.json({ post:result[0]});
      } else {
        res.send({ post:'' });
      }
    });
  });
  postsRouter.delete('/:id', function(req, res) {
    var db = req.db;
    var userToDelete = req.params.id;
    db.collection('posts').removeById(userToDelete, function(err, result) {
      res.send((result === 1) ? {  } : { msg:'error: ' + err });
    });
  });
  postsRouter.put('/:id', function(req, res) {
    var db = req.db;
    if(req.body){
      if(req.body._id){
        delete req.body._id;
      }
      db.collection('posts').updateById(req.params.id, {$set:req.body}, {safe:true, multi:false}, function(e, result){
        findById(db, req.params.id, res);
      })
    } else {
      res.send({ post:'' });
    }
  });

  app.use('/api/posts', postsRouter);
};
