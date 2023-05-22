import { signupController } from '../controller/users/user.controller.js'
import express from 'express'

const userRouter = express.Router()

userRouter.post('/signUp', signupController)

export default userRouter
