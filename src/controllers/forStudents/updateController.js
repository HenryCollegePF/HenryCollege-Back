const {Stundents} = require("../../db")
const updateController = async (id,password) => {
    console.log(id)
 const db = await Stundents.update({password:password},{where:{id}})
 console.log(db)
 return db
}
module.exports = updateController