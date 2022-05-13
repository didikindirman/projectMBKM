"use strict";

const { v4: uuidv4 } = require("uuid");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cars.init(
    {
      plate: DataTypes.STRING,
      manufacture: DataTypes.STRING,
      model: DataTypes.STRING,
      image: DataTypes.STRING,
      rentPerDay: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
      description: DataTypes.STRING,
      transmission: DataTypes.STRING,
      type: DataTypes.STRING,
      year: DataTypes.STRING,
      option: DataTypes.ARRAY(DataTypes.STRING),
      specs: DataTypes.ARRAY(DataTypes.STRING),
      availableAt: DataTypes.STRING,
      isWithDriver: DataTypes.BOOLEAN,
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "cars",
    }
  );
  cars.beforeCreate(async (data, option) => (data.id = uuidv4()));

  return cars;
};
