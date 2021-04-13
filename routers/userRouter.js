const express      = require('express')
const router       = express.Router()
const User         = require('../models/User')
const createRouter = require('./createRouter')

const userRouter   = createRouter(router, User, 'user', 'users')

module.exports = {userRouter}