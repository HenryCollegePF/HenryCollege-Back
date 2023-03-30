const { Router } = require("express");
const feedBackRouter = Router();
const checkJwt = require("../handlers/forAuth/protectRoutes")
const feedBackHandler = require("../handlers/forFeedBack/feedBackHandler");

feedBackRouter.get("/", checkJwt, feedBackHandler);

module.exports = feedBackRouter;
