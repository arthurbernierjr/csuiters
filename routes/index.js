const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.post('/users/signup', controller.createUser)
router.post('/users/login', controller.loginUser)
router.put('/users/:id', controller.updateUser)
router.delete('/users/:id', controller.auth, controller.deleteUser)
router.post('/leads/addLead', controller.createLead)
router.get('/leads/index', controller.auth, controller.leadIndex)
router.get('/leads/show/:id', controller.auth, controller.showLead)
router.get('/guests', controller.listGuests)
router.post('/guests', controller.auth, controller.createGuest)

module.exports = router
