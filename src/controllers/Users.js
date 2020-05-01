const Model = require("../models/users");
var defaultUsers = ["Tony Stark", "Peter Parker", "Steve Rogers"];
var users = defaultUsers.slice();
module.exports = {
  getUser: (req, res) => {
    Model.findAll().then(users => res.send(users));
  },
  addUser: (req, res) => {
    Model.create({ name: req.body.user }).then(result => res.json(result));
    res.redirect("/");
  },
  reset: (req, res) => {
    users = defaultUsers.slice();
    Model.sync({ force: true }) // Using 'force: true' for demo purposes. It drops the table users if it already exists and then creates a new one.
      .then(function() {
        // Add default users to the database
        for (var i = 0; i < users.length; i++) {
          // loop through all users
          Model.create({ name: users[i] }); // create a new entry in the users table
        }
      });
    res.redirect("/");
  },
  home: (req, res) => {
    res.sendFile("/sandbox/views/index.html");
  }
};

// create a new entry i
