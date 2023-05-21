import express from 'express';

const userRouter= express.Router()
import {signupController} from "../controller/users/user.controller.js";

userRouter.post('/signUp', signupController)

export default userRouter;