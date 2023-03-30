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

// Rutas publicas
studentsRouter.post("/", createStudentHandler)
studentsRouter.post("/login", logInStudentHandler)

// Ruta protegida
studentsRouter.get("/", checkJwt, getHandler)

// Ruta protegida para actualizar estudiante
studentsRouter.put("/:id", checkJwt, updateHandler)

//ruta protegida delete
studentsRouter.delete("/:id", checkJwt, deleteHandler)

studentsRouter.get("/:id", idHandler)

module.exports = studentsRouter

