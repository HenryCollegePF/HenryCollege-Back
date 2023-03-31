const {Feedback} = require("../../db")
const feedBackController = async(id) => {
 const db = await Feedback.findByPk(id)
 return db
}

module.exports = feedBackController