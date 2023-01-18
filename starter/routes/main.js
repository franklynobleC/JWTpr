const express = require('express');
const { Login, Dashboard } = require('../controllers/controller');
const authenticationMiddleware = require('../middleware/auth');
require = require('express-async-errors');
//invoke  router
const router = express.Router()

// const dashboard = require('../controllers/main');


 
router.route('/dashboard').get(authenticationMiddleware, Dashboard)
router.route('/login').post(Login)



module.exports = router   // exports the router
    