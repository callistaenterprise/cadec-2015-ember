module.exports = function(app) {
  var express = require('express');
  var poststestRouter = express.Router();

  poststestRouter.get('/', function(req, res) {
    res.send({
      "poststest": []
    });
  });

  poststestRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  poststestRouter.get('/:id', function(req, res) {
    res.send({
      "poststest": {
        "id": req.params.id
      }
    });
  });

  poststestRouter.put('/:id', function(req, res) {
    res.send({
      "poststest": {
        "id": req.params.id
      }
    });
  });

  poststestRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/poststest', poststestRouter);
};
