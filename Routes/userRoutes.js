const express = require('express')
const userControllers = require('../Controllers/userControllers')

const router = express.Router()

//
router.post('/user', userControllers.createUser)
router.get('/users', userControllers.getUsers)
router.post('/parcel', userControllers.createParcel)
router.get('/parcels', userControllers.getParcels)
router.get('/user/:id', userControllers.getSpecificUser)
router.get('/parcel/:id', userControllers.getSpecificparcel)
router.put('/user/:id', userControllers.updateUser)
router.put('/parcel/:id', userControllers.updateParcel)
router.delete('/parcel/:id', userControllers.deleteParcel)
router.delete('/user/:id', userControllers.deleteUser)
router.post('/user/login', userControllers.userLogin)
router.post('/user/logout', userControllers.userLogout)
router.post('/user/forgetpassword', userControllers.forgotPassword)

module.exports = router