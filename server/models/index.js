const dbConfig = require("../database/dbConfig");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.Courses = require("./course")(sequelize, Sequelize.DataTypes);
db.models.Students = require("./student")(sequelize, Sequelize.DataTypes);
db.models.Registration = require("./registration")(
  sequelize,
  Sequelize.DataTypes
);

db.sequelize.sync({ force: false }).then(() => {
  console.log("re sync done");
});

module.exports = db;
