const Sequelize = require("sequelize");

const sequelize = new Sequelize("food_delivery_app_db", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
