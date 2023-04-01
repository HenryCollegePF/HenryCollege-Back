const removeMembership = require("../../controllers/forMembership/deleteMembership")

const removeMembershipHandler = async (req, res) => {
  try {
    const id = Number.parseInt(req.query.userId)
    await removeMembership(id);
    res.send("la membresía fue eliminada con éxito")
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message)
  }
}

module.exports = removeMembershipHandler