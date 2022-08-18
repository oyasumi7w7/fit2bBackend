const express = require('express');
const UserModel = require('../Models/userModel');
const usersController = require('../Controller/userController');

const userRouter = express.Router();

userRouter.post("/", usersController.signup);
userRouter.get("/user", usersController.getDetail);

module.exports = userRouter;