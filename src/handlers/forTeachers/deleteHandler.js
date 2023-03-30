const deleteController = require("../../controllers/forTeachers/deleteController");

const deleteHandler = async (req, res) => {
  try {
    const deleteInfo = await deleteController(req.params.id);
    res.status(200).json(deleteInfo)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
};

module.exports = deleteHandler;
