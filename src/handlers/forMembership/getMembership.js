const { getMemberships, getMembershipByUserId } = require("../../controllers/forMembership/getMembershipController")

const getMembershipHandler = async (req, res) => {
  try {
    const memberships = await getMemberships();
    res.send(memberships)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

const getMembershipByUser = async (req, res) => {
  try {
    const membership = await getMembershipByUserId(req.params.userId);
    res.send(membership)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

module.exports = { getMembershipHandler, getMembershipByUser }