//import our db, Model, DataTypes
const { DataTypes } = require("sequelize");
const db = require("../db/db");

//Creating a User child class from the Model parent class
const User = db.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});

//exports
module.exports = User;
