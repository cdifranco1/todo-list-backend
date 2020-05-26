const router = require('express').Router()
const taskRouter = require('./tasks')
const userRouter = require('./users')


router.use("/tasks", taskRouter)
router.use("/users", userRouter)


module.exports = router