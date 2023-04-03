const { Feedback, Students,Course } = require("../../db");

const postController = async (
  rate,
  courseFeedback,
  teachersFeedback,
  studentId,
  courseId
) => {
  const dbCourse = await Course.findOne({where:{id:courseId}})
  console.log(dbCourse)
  const dbStudent = await Students.findOne({where:{id:studentId}});
  console.log(dbStudent)
  const newFeedBack = await Feedback.create({
    rate,
    courseFeedback,
    teachersFeedback,
    dbStudent,
    dbCourse
    
  });

  return newFeedBack
};

module.exports = postController;
