const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()
const User = require('./user-model')
const { validation, schemas } = require('../middleware')


// Probably won't need this route
router.get('/', async (req, res) => {

  try {
    const users = await User.getAll()

    res.status(200).json(users)

  } catch(err) {

    res.status(500).json({ error: err.message })
  }
})


//registration
router.post('/register', validation(schemas.user), async (req, res) => {
  const { password, username }  = req.body

  try {

    const passHash = bcrypt.hashSync(password)

    const user = { username, password: passHash}

    const newUser = await User.addUser(user)

    res.status(200).json(newUser)

  } catch(err) {

    res.status(500).json({ error: err.message })
  }
})



//login
router.post('/login', validation(schemas.user), async (req, res) => {
  console.log("running")
  const authError = "Invalid username or password."
  const { username, password } = req.body

  try {
    const user = await User.findBy('username', username).first()
    console.log(user)

    if (!user) return res.status(401).json(authError)

    const passHash = user.password
    const validPass = bcrypt.compareSync(password, passHash)

    if (validPass){
      const payload = {
        id: user.id,
        username
      } 

      const secretKey = process.env.JWT_SECRET || "secret key"

      const token = jwt.sign(payload, secretKey, { expiresIn: "2 days"} )

      res.cookie('token', token)
      
      return res.status(200).json(`Welcome ${username}`)
    } 

  } catch(err) {

    res.status(500).json({ error: err.message })
  }
})


module.exports = router


