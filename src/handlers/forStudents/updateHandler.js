const updateController = require("../../controllers/forStudents/updateController")

const updateHandler = async(req,res) => {
    const updated = updateController(req.params, req.body)
res.status(200).json("todo fino")
}



module.exports = updateHandler