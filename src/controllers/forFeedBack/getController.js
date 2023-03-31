const { Feedback } = require("../../db");

const getController = async (id) => {
  const db = await Feedback.findByPk(id);
  console.log(db);
  return db;
};

module.exports = getController;
