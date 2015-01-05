module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    var db = req.db;
    var query = null;
    if(req.query.post_id){
      query = {'user' : req.query.user_id};
    }
    db.find('posts', query, db, res);
  });

  postsRouter.get('/:id?', function(req, res) {
    var db = req.db;
    db.findById('post',db, req.params.id, res);
  });

  postsRouter.post('/', function(req, res) {
    var db = req.db;
    db.insertWithSeq('post', db, res, req.body.post);
  });

  postsRouter.delete('/:id', function(req, res) {
    var db = req.db;
    db.delete('post', req.params.id, db, res);
  });

  postsRouter.put('/:id', function(req, res) {
    var db = req.db;
    db.put('post', db,  res, req);
  });

  app.use('/api/posts', postsRouter);
};
