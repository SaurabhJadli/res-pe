const router = require('express').Router();
const apiRoutes = require('./API/index')

router.use('/api', apiRoutes)

module.exports = router