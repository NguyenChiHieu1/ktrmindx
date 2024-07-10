const router = require('express').Router()
const ctrls = require('../controllers/movie')

router.post('/create', ctrls.create)
router.get('/getallmovie', ctrls.getAllMovie)
router.put('/updateMovie/:bid', ctrls.updateMovie)
router.delete('/deleteMovie/:bid', ctrls.deleteMovie)
router.get('/search/:name', ctrls.searchNameMovie)
router.get('/getbyyear', ctrls.getByYear)

module.exports = router