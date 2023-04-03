const { Router } = require("express");
const feedBackRouter = Router();
const checkJwt = require("../handlers/forAuth/protectRoutes")
const getHandler = require("../handlers/forFeedBack/getHandler");
const postHandler = require("../handlers/forFeedBack/postHandler");

//Protegida
feedBackRouter.get("/:id", checkJwt, getHandler);
feedBackRouter.post("/",checkJwt, postHandler)

module.exports = feedBackRouter;
