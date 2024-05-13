const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Food = sequelize.define("food", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cuisine: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  rating: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Food;
