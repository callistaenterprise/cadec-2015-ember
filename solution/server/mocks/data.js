module.exports = function(app) {
  var express = require('express');
  var dataRouter = express.Router();

  var clean = function(db, message){

    db.collection('counters').remove({},function(err, result){
      var message = "";
      if(err){
        message += "[error while cleaning " + table.name +", error " + err +"],";
      } else {
        message += "[removed:" + result + " lines from counters],";
      }
      console.log(message);
    });

    data.forEach( function(table){
      db.collection(table.name).remove({}, function(err, result){
        var message = "";
        if(err){
          message += "[error while cleaning " + table.name +", error " + err +"],";
        } else {
          message += "[removed:" + result + " lines from " + table.name + "],";
        }
        console.log(message);
      });
    });
  };
  var insertAll = function(db, message){

    data.forEach( function(table){
      db.collection(table.name).insert(table.data, function(err, result){
        var message = "";
        if(err){
          message += "[error while inserting on " + table.name +", error " + err +"],";
        } else {
          message += "[inserted:" + result + " lines into " + table.name + "],";
        }

        console.log(message);

        console.log('------');
        var counterName = table.name+"id";
        console.log('creating counter for : ' + counterName);
        // sequences
        db.collection("counters").insert(
          {
            _id: counterName,
            seq: 10
          },
          function(err, result){
            if(err){
              message += "[error while inserting on " + table.name +", error " + err +"],";
            } else {
              message += "[inserted:" + result + " lines into " + table.name + "],";
            }
            console.log(message);
          }
        );

      });




    });
  }
  dataRouter.get('/clean', function(req, res) {
    var db = req.db;
    clean(db);
    res.send("ok");
  });
  dataRouter.get('/reset', function(req, res) {
    var db = req.db;
    clean(db);
    insertAll(db);
    res.send("ok");
  });
  dataRouter.get('/insertAll', function(req, res) {
    var db = req.db;
    insertAll(db);
    res.send("ok");
  });
  app.use('/api/data', dataRouter);
};
