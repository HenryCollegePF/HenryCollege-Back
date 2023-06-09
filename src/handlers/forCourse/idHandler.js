const getId = require("../../controllers/forCourse/idController")

const idHandler = async (req, res) => {
    const { id } = req.params
    const resultId = await getId(id)
    try {
        resultId ? res.status(200).json(resultId) : res.status(404).send("Not found id")
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

module.exports = idHandler