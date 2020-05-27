const Joi = require('@hapi/joi')

const schemas = {
  user: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  }),
  task: Joi.object({
    task: Joi.string().required(),
    dueDate: Joi.date(),
    details: Joi.string()
  })
}

const validation = (schema) => {
  
  return (req, res, next) => {

    const { error, value } = schema.validate(req.body)

    if (error) return res.status(400).json({ error: error.details[0].message })

    next()
  }
}

module.exports = {
  validation,
  schemas
}
