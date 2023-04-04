const updateController = require("../../controllers/forStudents/updateController");

const updateHandler = async (req, res) => {
  try {
    const { userId } = req.params 
    const idNumber = Number.parseInt(userId)
    const updated = await updateController(idNumber);
    res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateHandler;
