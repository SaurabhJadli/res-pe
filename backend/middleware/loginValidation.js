const Joi = require('joi')

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(100).required()
})
module.exports = loginSchema