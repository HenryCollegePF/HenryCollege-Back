const {Course} = require("../../db")

const deleteController = async(id) => {
const db = await Course.destroy({where:{id:id}})
return "Succesfully Erased"
}
module.exports = deleteController