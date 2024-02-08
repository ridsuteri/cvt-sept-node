const express = require('express')
const {getAllUsers, creatAUser, showProfile} = require('../controllers/userController');

const Router = express.Router()

Router.get('/', getAllUsers);
Router.post('/', creatAUser);
Router.get('/profile/:username', showProfile);

module.exports = Router;