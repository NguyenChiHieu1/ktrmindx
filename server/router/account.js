const router = require('express').Router()
const ctrls = require('../controllers/account')

router.post('/create', ctrls.create)
router.post('/login', ctrls.login)
router.get('/logout', ctrls.logout)

module.exports = router