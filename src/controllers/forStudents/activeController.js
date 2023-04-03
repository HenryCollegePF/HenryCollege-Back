const {Students} = require("../../db")

const activeController = async(id) => {
 if(Students.active !== true){
     const db = await Students.update({active:true},{where:{id}})
     return "successfully actived"
    }else{
        return "already active"
    }
}

module.exports = activeController