const feedBackController = require("../../controllers/forFeedBack/feedBackController")
const feedBackHandler = async(req, res) => {
try {
    const {id} = req.params
    const inf = await feedBackController(id)
    res.status(200).json(inf)
} catch (error) {
    res.status(400).json({message:error.message})
}
}
module.exports = feedBackHandler