const { Router } = require("express")
const studentsRouter = Router()
const {
  createStudentHandler,
  logInStudentHandler,
} = require("../handlers/forStudents/postHandler")
const getHandler = require("../handlers/forStudents/getHandler")
const checkJwt = require("../handlers/forAuth/protectRoutes")
const updateHandler = require("../handlers/forStudents/updateHandler")
const idHandler = require("../handlers/forStudents/idHandler")
const deleteHandler = require("../handlers/forStudents/deleteHandler")
const activeHandler = require("../handlers/forStudents/activeHandler")

// Rutas publicas
studentsRouter.post("/", createStudentHandler)
studentsRouter.post("/login", logInStudentHandler)
studentsRouter.put('/reset-password/:userId', updateHandler)

// Ruta protegida
studentsRouter.get("/", checkJwt, getHandler)
studentsRouter.delete("/:id", checkJwt, deleteHandler)
studentsRouter.put("/active/:id", checkJwt, activeHandler)
studentsRouter.get("/:id",checkJwt, idHandler)

module.exports = studentsRouter

