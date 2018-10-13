var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = "SELECT m.id,m.message,r.name,u.name FROM messages m,rooms r, users u WHERE m.room_id = r.id AND m.user_id = u.id";
      db.dbConnection.query(queryString,function(err,results){
        if(err){
          console.log(err)
        } else{
          callback(null,results)
        }
      })
    }, // a function which produces all the messages
    post: function (message,userID,roomID,callback) {
      var queryString = "INSERT INTO messages (message,user_id,room_id) VALUES(@message + @userID + @roomID + )";
      db.dbConnection.query(queryString,function(err,result){
        if(err){
          console.log(err)
        } else{
          console.log('success')
          //callback(null,results)
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = "SELECT * FROM users";
      db.dbConnection.query(queryString,function(err,results){
        if(err){
          console.log(err)
        } else{
          callback(null,results)
        }
      })
    },
    post: function (username,callback) {
      console.log(username);
      var queryString = "INSERT INTO users (name) VALUES("+ "'"+username+ "'"+")";
      console.log(queryString)
      db.dbConnection.query(queryString,function(err,result){
        if(err){
          console.log(err);
        } else{
          console.log('success')
          callback(null,result);
        }
      });
    }
  }
};
