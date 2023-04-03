const {Teachers} = require("../../db")
const deleteController = async (id) => {
    const bd = await Teachers.update({active:false},{where:{id}})
    return "successfully erased"

}

module.exports = deleteController