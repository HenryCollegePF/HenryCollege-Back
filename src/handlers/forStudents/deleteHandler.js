const deleteController = require("../../controllers/forStudents/deleteController")
const deleteHandler = async(req, res) => {
try {
    const {id} = req.params
    const disabled = await deleteController(id)
    res.status(200).json(disabled)
} catch (error) {
    console.log(error)
    res.status(400).json({message:error.messag})
}
}

module.exports = deleteHandler