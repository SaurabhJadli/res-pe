const router = require('express').Router();
const userLogin = require('./loginAPI.route');
const userRegister = require('./registerAPI.route');
const userMessage = require('./messageAPI.route');

router.use('/entry', userLogin)
router.use('/entry', userRegister)
router.use('/contact', userMessage)

module.exports = router