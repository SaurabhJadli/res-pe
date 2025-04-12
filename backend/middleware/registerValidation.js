const Joi = require('joi')

const registrationSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(100).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
}).with('password', 'confirmPassword')

module.exports = registrationSchema