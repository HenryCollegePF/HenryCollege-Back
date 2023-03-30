const updateController = require("../../controllers/forStudents/updateController");

const updateHandler = async (req, res) => {
  try {
    const { password } = req.body;
    const updated = updateController(req.params.id, password);
    res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateHandler;
