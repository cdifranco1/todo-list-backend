const router = require('express').Router()
const User = require('./user-model')

router.get('/', async (req, res) => {
  try {
    const users = await User.getAll()

    res.status(200).json(users)

  } catch(err) {

    res.status(500).json({ error: err.message })
  }
})

router.post('/', async (req, res) => {
  const user = req.body

  try {
    const newUser = await User.addUser()

    res.status(200).json(users)

  } catch(err) {

    res.status(500).json({ error: err.message })
  }
})


module.exports = router



