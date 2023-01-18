const express = require('express');
const { Login, Dashboard } = require('../controllers/controller');
const authenticationMiddleware = require('../middleware/auth');
require('express-async-errors');

const router = express.Router()

 
router.route('/dashboard').get(authenticationMiddleware, Dashboard) // use auth middleware only for authenticated  users
router.route('/login').post(Login)



module.exports = router   // exports the router
    