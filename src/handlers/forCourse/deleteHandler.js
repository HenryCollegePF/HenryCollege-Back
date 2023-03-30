const deleteController = require("../../controllers/forCourse/deleteController")

const deleteHandler = async(req, res) =>{
try {
    const deleteCourse  = await deleteController(req.params)
    res.status(200).json(deleteCourse)
} catch (error) {
    res.send({message: error.message})
}
}

module.exports = deleteHandler;