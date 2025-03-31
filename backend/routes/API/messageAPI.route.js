const message = require('../../controllers/message')
const router = require('express').Router()

router.post('/message', message)

module.exports = router