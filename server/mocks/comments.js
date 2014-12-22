module.exports = function(app) {
  var express = require('express');
  var commentsRouter = express.Router();

  commentsRouter.get('/', function(req, res) {
    var db = req.db;
    if(req.query.post_id){
      var query = {'post' : req.query.post_id};
      db.collection('comments').find(query).toArray(function (err, items) {
        res.json({'comments':items});
      });
    } else {
      db.collection('comments').find().toArray(function (err, items) {
        res.json({'comments':items});
      });
    }

  });

  commentsRouter.get('/:id?', function(req, res) {
    var db = req.db;
    db.findById('comment',db, req.params.id, res);
  });

  commentsRouter.post('/', function(req, res) {
    var db = req.db;
    db.insertWithSeq('comment', db, res, req.body.comment);
  });

  commentsRouter.delete('/:id', function(req, res) {
    var db = req.db;
    db.delete('comment', req.params.id, db, res);
  });

  commentsRouter.put('/:id', function(req, res) {
    var db = req.db;
    db.put('comment', db,  res, req);
  });

  app.use('/api/comments', commentsRouter);
};
