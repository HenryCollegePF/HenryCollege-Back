const idController = require("../../controllers/forStudents/idController") 
const idHandler = async(req, res) => {
    try {
    const {id} = req.params
    const filtered = await idController(id)
    res.status(200).json(filtered)
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }
}

module.exports = idHandler