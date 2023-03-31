const {Students} = require("../../db")

const deleteController = async(id) => {
 const db = await Students.update({active:false},{where:{id}})
 return "successfully erased"
}

module.exports = deleteController