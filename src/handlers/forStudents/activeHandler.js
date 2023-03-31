const activeController = require("../../controllers/forStudents/activeController")

const activeHandler = async(req, res) =>{
    const {id} = req.params
    try {
        const active = await activeController(id)
        res.status(200).json(active)
    } catch (error) {
        console.log(error)
        res.send(Error)
    }
}

module.exports= activeHandler