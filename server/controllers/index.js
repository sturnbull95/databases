var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.message.get(req,res)
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.users.post(req.body.username,req.body.message,req.body.room)
      res.send(req.body.username,req.body.message,req.body.room)
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('user get')
    },
    post: function (req, res) {
      // INSERT INTO USER TABLE
      console.log(req.body.username)
      models.users.post(req.body.username,function(input){
        res.send(input)
      })
    }
  }
};
