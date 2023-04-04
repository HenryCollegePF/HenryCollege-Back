const {Students} = require("../../db")

const deleteController = async(id) => {
const student = await Students.findByPk(id)
 if(student.active === false){
 const active = await Students.update({active:true},{where:{id}})
 return "it was activated successfully"
 }else{
    const db = await Students.update({active:false},{where:{id}})
    return "successfully erased"
 }
 
}

module.exports = deleteController