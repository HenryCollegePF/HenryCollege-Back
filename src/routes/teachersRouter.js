const { Router } = require("express")
const teachersRouter = Router()
const {
  createTeacherHandler,
  logInTeacherHandler,
} = require("../handlers/forTeachers/postHandler")
const getHandler = require("../handlers/forTeachers/getHandler")
const deleteHandler = require("../handlers/forTeachers/deleteHandler")
const checkJwt = require("../handlers/forAuth/protectRoutes")


// Ruta publica
teachersRouter.post("/", createTeacherHandler)
teachersRouter.post("/login", logInTeacherHandler)

// Ruta protegida
teachersRouter.get("/", checkJwt, getHandler)
teachersRouter.delete("/:id", checkJwt, deleteHandler)

module.exports = teachersRouter