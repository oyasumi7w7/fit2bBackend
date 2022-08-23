const express = require('express');
const UserModel = require('../Models/userModel');
const usersController = require('../Controller/userController');

const userRouter = express.Router();


userRouter.param("user_id", async (req, res, next, _id) => {
    const user = await UserModel.findOne({
        _id : _id,
    });
  
    if (!user) {
      return res.status(404).send();
    }
  
    req.user = user;
  
    next();
  });

userRouter.post("/signup", usersController.signup);
userRouter.get("/user", usersController.getDetail);
userRouter.put("/user/:user_id", usersController.updateUser);
userRouter.get("/signup/check", usersController.checkUser);

module.exports = userRouter;