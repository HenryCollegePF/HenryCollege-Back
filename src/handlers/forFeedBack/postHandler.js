const postController = require("../../controllers/forFeedBack/postController")
const postHandler = async(req, res) => {
    try {
        const {rate,courseFeedback,teachersFeedback,StudentId} = req.body
        const resFeed = await postController(rate,courseFeedback,teachersFeedback,studentId)
        res.status(200).json(resFeed)
       
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}

module.exports = postHandler