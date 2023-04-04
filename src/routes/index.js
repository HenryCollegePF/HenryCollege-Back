const {Router} = require("express")
const router = Router()
const courseRouter = require("./courseRouter")
const studentsRouter = require("./studentsRouter")
const teachersRouter = require("./teachersRouter")
const membershipRouter = require("./membershipRouter")
const feedBackRouter = require("./feedbackRouter")

// Rutas protegidas
router.use("/course", courseRouter)
router.use("/students", studentsRouter)
router.use("/teachers", teachersRouter)
router.use("/membership", membershipRouter)
router.use("/feedback", feedBackRouter)

module.exports = router; 