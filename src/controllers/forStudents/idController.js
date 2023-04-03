const {Students,Membership,Feedback} = require("../../db")

const idController = async(id) => {
const db = await Students.findByPk(id,{
    include:[
        {
        model:Membership,
        attributes:["paymentId"]
    },
    {
        model:Feedback,
        attributes:["courseFeedback","teachersFeedback","rate"]
    }
]
})
return db
}
module.exports = idController