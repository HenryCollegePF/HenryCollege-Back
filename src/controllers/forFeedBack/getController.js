const {Feedback} = require("../../db")
const getController = async(id) => {
 const db = await Feedback.findByPk(id)
 return db
}

module.exports = getController