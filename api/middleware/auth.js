const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const authorization = async (req, res, next) => {
  const { token } = req.cookies  

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next(err)

    console.log(decoded)
    
    next()
  })
}

module.exports = authorization



