const {Stundents} = require("../../db")
const updateController = async (info) => {
 const db = await Stundents.findAll()
 return db
}
module.exports = updateController