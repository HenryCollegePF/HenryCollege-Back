const {Students} = require("../../db")
const idController = async(id) => {
const db = await Students.findByPk(id)
return db
}
module.exports = idController