
const {Feedback,Course} = require("../../db")

const getId = async (id) => {
    const db = await Course.findByPk(id,{
        include:{
            model:Feedback,
            attribute:["id"]
        }
    })
    return db
}

module.exports = getId;