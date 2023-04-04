const {Teachers} = require("../../db")
const deleteController = async(id) =>{
    const teacher = await Teachers.findByPk(id)
    if(teacher.active === false){
    const active = await Teachers.update({active:true},{where:{id}})
    return "it was activated successfully"
    }else{
       const db = await Teachers.update({active:false},{where:{id}})
       return "successfully erased"
    }
}


module.exports = deleteController