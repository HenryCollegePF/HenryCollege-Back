const postController = require("../../controllers/forFeedBack/postController");
const postHandler = async (req, res) => {
  try {
    const { rate, courseFeedback, teachersFeedback, studentId, courseId } = req.body;
    console.log(studentId,courseId)
    
    const resFeed = await postController(
      rate,
      courseFeedback,
      teachersFeedback,
      studentId,
      courseId
      
    );
    
    res.status(200).json(resFeed);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = postHandler;
