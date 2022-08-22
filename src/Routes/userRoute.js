const express = require('express');
const UserModel = require('../Models/userModel');
const usersController = require('../Controller/userController');

const userRouter = express.Router();

userRouter.post("/signup", usersController.signup);
userRouter.get("/user", usersController.getDetail);
userRouter.get("/signup/check", usersController.checkUser);

module.exports = userRouter;