const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Feedback", {
    courseFeedback: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teachersFeedback: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rate: {
      type: DataTypes.ENUM("One", "Two", "Three", "Four", "Five"),
      allowNull: false,
    },
    /*studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },*/
    /*courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },*/
    
  });
};
