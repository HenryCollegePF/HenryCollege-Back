const { Feedback, Students } = require("../../db");

const postController = async (
  rate,
  courseFeedback,
  teachersFeedback,
  studentId
) => {
  const dbStudent = await Students.findByPk(studentId);
  const newFeedBack = await Feedback.create({});
};

module.exports = postController;
