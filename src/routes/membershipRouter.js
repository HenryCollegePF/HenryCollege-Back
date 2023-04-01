const { Router } = require("express");
const membershipRouter = Router();

const { getMembershipHandler, getMembershipByUser } = require("../handlers/forMembership/getMembership")
const postMembershipHandler = require("../handlers/forMembership/postMembership")
const updateMembershipHandler = require("../handlers/forMembership/putMembership")
const removeMembershipHandler = require("../handlers/forMembership/removeMembership")


membershipRouter.get("/", getMembershipHandler)
membershipRouter.get("/:userId", getMembershipByUser)
membershipRouter.post("/", postMembershipHandler)
membershipRouter.put("/", updateMembershipHandler)
membershipRouter.delete("/", removeMembershipHandler)

module.exports = membershipRouter;
