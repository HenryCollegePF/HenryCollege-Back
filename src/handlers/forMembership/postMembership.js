const createMembership = require("../../controllers/forMembership/postMembership")

const postMembershipHandler = async (req, res) => {
  try {
    const postMembership = await createMembership(req.body);
    res.send(postMembership)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

module.exports = postMembershipHandler
