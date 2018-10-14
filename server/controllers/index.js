var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { console.log(err)/* do something */ }
        else{
          console.log('success get message')
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) { console.log(err)/* do something */ }

        else{
          console.log('success post message')
          res.sendStatus(201);
        }
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { console.log(err)/* do something */ }
        else{
          console.log('success get user')
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) { console.log(err)/* do something */ }
        else{
          res.sendStatus(201);
        }
      });
    }
  }
  };
