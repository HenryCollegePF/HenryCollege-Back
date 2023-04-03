
const {Feedback,Course} = require("../../db")

const getId = async (id) => {
    const db = await Course.findByPk(id,{
        includes:{
            model:Feedback,
            attributes:"courseFeedback"
        }
    })
    return db
}

module.exports = getId;