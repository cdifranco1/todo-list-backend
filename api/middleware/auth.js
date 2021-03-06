const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const authorization = async (req, res, next) => {
   const authError = "Invalid username or password."

  const token = req.headers.authorization
  
  if (!token) return res.status(401).json(authError)

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next(err)
    
    req.decodedToken = decoded

    next()
  })
}

module.exports = authorization



