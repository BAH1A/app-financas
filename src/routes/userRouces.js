const express = require('express')
const router = express.Router()
const userControler = require('../controller/userController')

router.post('/new-user', userControler.create)
router.get('users/:id', userControler.getById)

module.exports = router