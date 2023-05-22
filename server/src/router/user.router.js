import express from 'express'

const userRouter = express.Router()
import { signupController, signIn } from "../controller/users/user.controller.js";

userRouter.post('/signup', signupController)

userRouter.post('/signin', signIn)

export default userRouter
