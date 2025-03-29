const login = require('../../controllers/login');
const router = require('express').Router();

router.post('/login', login)

module.exports = router