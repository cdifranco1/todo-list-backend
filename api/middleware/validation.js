const Joi = require('@hapi/joi')

const schemas = {
  user: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  }),
  task: Joi.object({
    id: Joi.number().integer(),
    task: Joi.string().required(),
    userId: Joi.number().integer().required(),
    completed: Joi.boolean(),
    dueDate: Joi.string().allow("", null),
    details: Joi.string().allow("", null)
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
