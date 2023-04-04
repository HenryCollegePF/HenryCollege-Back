const { Feedback, Students,Course } = require("../../db");

const postController = async (
  rate,
  courseFeedback,
  teachersFeedback,
  studentId,
  courseId
) => {
  console.log( studentId, courseId)

  const dbCourse = await Course.findOne({where:{id:courseId}})
  console.log(dbCourse)
 
  
  const dbStudent = await Students.findOne({where:{id:studentId}})

  //console.log(dbCourse,dbStudent)
 
  
  const newFeedBack = await Feedback.create({
    rate,
    courseFeedback,
    teachersFeedback,
    studentId: dbStudent.id,
    courseId: dbCourse.id
    
  });

  return newFeedBack
};

module.exports = postController;
