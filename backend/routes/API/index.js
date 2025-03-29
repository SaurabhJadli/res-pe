const router = require('express').Router();
const userLogin = require('./loginAPI.route');
const userRegister = require('./registerAPI.route');

router.use('/entry', userLogin)
router.use('/entry', userRegister)

module.exports = router