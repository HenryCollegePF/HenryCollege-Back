const updateMembership = require("../../controllers/forMembership/putMembership")

const updateMembershipHandler = async (req, res) => {
  try {
    const editMembership = await updateMembership(req.body);
    res.send(editMembership)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

module.exports = updateMembershipHandler