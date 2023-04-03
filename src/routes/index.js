const {Router} = require("express")
const router = Router()
const courseRouter = require("./courseRouter")
const studentsRouter = require("./studentsRouter")
const teachersRouter = require("./teachersRouter")
<<<<<<< HEAD
const membershipRouter = require("./membershipRouter")
=======
const feedBackRouter = require("./feedbackRouter")
>>>>>>> deleteRoutes

// Rutas protegidas
router.use("/course", courseRouter)
router.use("/students", studentsRouter)
router.use("/teachers", teachersRouter)
<<<<<<< HEAD
router.use("/membership", membershipRouter)
=======
router.use("/feedback", feedBackRouter)
>>>>>>> deleteRoutes

module.exports = router; 