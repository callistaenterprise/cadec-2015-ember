module.exports = function(app) {
  var express = require('express');
  var commentsRouter = express.Router();

  var findById = function(db, id, res){
    db.collection('comments').findById(id, function(err, result) {
      if(result !== null){
        res.json({ comment:result });
      } else {
        res.send({ comment:'' });
      }
    });
  }

  commentsRouter.get('/', function(req, res) {
    var db = req.db;
    if(req.query.post_id){
      var query = {'postId' : req.query.post_id};
      db.collection('comments').find(query).toArray(function (err, items) {
        res.json({'comments':items});
      });
    } else {
      db.collection('comments').find(query).toArray(function (err, items) {
        res.json({'comments':items});
      });
    }

  });
  commentsRouter.get('/:id?', function(req, res) {
    var db = req.db;
    findById(db, req.params.id, res);
  });
  commentsRouter.post('/', function(req, res) {
    var db = req.db;
    db.collection('comments').insert(req.body, function(err, result){
      if(result !== null && result.length > 0){
        res.json({ comment:result[0]});
      } else {
        res.send({ comment:'' });
      }
    });
  });
  commentsRouter.delete('/:id', function(req, res) {
    var db = req.db;
    var commentToDelete = req.params.id;
    db.collection('comments').removeById(commentToDelete, function(err, result) {
      res.send((result === 1) ? {  } : { msg:'error: ' + err });
    });
  });
  commentsRouter.put('/:id', function(req, res) {
    var db = req.db;
    if(req.body){
      if(req.body._id){
        delete req.body._id;
      }
      db.collection('comments').updateById(req.params.id, {$set:req.body}, {safe:true, multi:false}, function(e, result){
        findById(db, req.params.id, res);
      })
    } else {
      res.send({ comment:'' });
    }
  });

  app.use('/api/comments', commentsRouter);
};
