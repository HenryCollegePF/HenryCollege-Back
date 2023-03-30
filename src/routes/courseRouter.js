const { Router } = require("express")
const courseRouter = Router()

const getHandler = require("../handlers/forCourse/getHandler") //traer de los handlers
const idHandler = require("../handlers/forCourse/idHandler")
const deleteHandler = require("../handlers/forCourse/deleteHandler")
const postHandler = require("../handlers/forCourse/postHandler")
const checkJwt = require("../handlers/forAuth/protectRoutes")

// Rutas publicas
courseRouter.get("/", getHandler)

// Rutas protegidas
courseRouter.get("/:id", checkJwt, idHandler)
courseRouter.post("/", checkJwt, postHandler)
courseRouter.delete("/:id", checkJwt, deleteHandler)


module.exports = courseRouter