const getController = require("../../controllers/forFeedBack/getController")
const getHandler = async(req, res) => {
try {
    const {id} = req.params
    const inf = await getController(id)
    res.status(200).json(inf)
} catch (error) {
    res.status(400).json({message:error.message})
}
}
module.exports = getHandler