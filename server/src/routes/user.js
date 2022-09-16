const { Router } = require('express')
const { signUp } = require('../controllers/user')

const router = Router()

router.post('/sign-up', signUp)

module.exports = router
