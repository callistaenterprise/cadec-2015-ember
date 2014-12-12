module.exports = function(app) {
  var express = require('express');
  var blogPostRouter = express.Router();
  blogPostRouter.get('/', function(req, res) {
    res.send({"blog-post": [
        {id: 1, title: 'Simple sample title', meta: 'some meta data', body: 'Lorem ipsum'},
        {id: 2, title: 'Simple sample title 2', meta: 'some meta data 2', body: 'Lorem ipsum 2'}
      ]});
  });
  app.use('/api/blog-post/:id?', blogPostRouter);
};
