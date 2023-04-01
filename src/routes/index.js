const {Router} = require("express")
const router = Router()
const courseRouter = require("./courseRouter")
const studentsRouter = require("./studentsRouter")
const teachersRouter = require("./teachersRouter")
const membershipRouter = require("./membershipRouter")

// Rutas protegidas
router.use("/course", courseRouter)
router.use("/students", studentsRouter)
router.use("/teachers", teachersRouter)
router.use("/membership", membershipRouter)

module.exports = router; 