const {Feedback,Students} = require("../../db")

const postController = async(rate,courseFeedback,teachersFeedback,studenId) => {
const dbStudent = await Students.findByPk(studenId)
const newFeedBack = await Feedback.create({
    
})
}

module.exports = postController