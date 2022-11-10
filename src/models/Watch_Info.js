//import our db, Model, DataTypes
const { DataTypes } = require("sequelize");
const db = require("../db/db");

//Creating a Watch_Info child class from the Model parent class
const Watch_Info = db.define(
  "Watch_Info",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    rating: { type: DataTypes.NUMBER, allowNull: true },
  },
  { timestamps: false }
);

//exports
module.exports = Watch_Info;
