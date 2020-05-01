const Sequelize = require("sequelize");

var sequelize = new Sequelize("database", "impactbyte", "impactbyte", {
  host: "0.0.0.0",
  dialect: "sqlite",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: "/sandbox/src/db/database.sqlite"
});

const Model = sequelize.define("users", {
  //ini harusnya user bukan name kayaknya
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Model;
