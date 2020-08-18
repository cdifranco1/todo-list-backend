const router = require('express').Router()
const Tasks = require('./task-model')
const { validation, schemas, authorization } = require('../middleware')

router.use('/', authorization)

router.get('/', async (req, res) => {

  try {
    const tasks = await Tasks.getAll()

    res.status(200).json(tasks)

  } catch(err) {
    res.status(500).json({ error: err.message })
  }
})



router.post('/',  validation(schemas.task), async (req, res) => {
  console.log(req.body)

  try {
    const newTask = await Tasks.addTask(req.body)

    res.status(201).json(newTask)

  } catch(err) {

    res.status(500).json({ error: err.message })
  }

})

router.put('/:id', validation(schemas.task), async (req, res) => {
  const { id } = req.params

  try {
    const updated = await Tasks.updateTask(id, req.body)

    res.status(200).json(updated)

  } catch(error) {
    res.status(500).json({ error: error.message })
  }

})

//need to complete this
router.delete('/batch/:userId', async (req, res) => {
  const { userId } = req.params

  try {
    const deleted = await Tasks.batchDeleteCompleted(userId)

    res.status(200).json(deleted)

  } catch(err) {

    res.status(500).json({ error: err.message })
  }

})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const removed = await Tasks.findBy('id', id).first()
    
    const count = await Tasks.deleteTask(id)

    if (!count) return res.status(403).json({ message: "Resource with specified ID does not exist."})

    res.status(200).json(removed)

  } catch(err) {

    res.status(500).json({ error: err.message })
  }

})


module.exports = router