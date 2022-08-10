const express = require('express');
const UserModel = require('../Models/userModel');
const usersController = require('../Controller/userController');

const userRouter = express.Router();

userRouter.post("/", usersController.signup);

module.exports = userRouter;