import express from 'express'
import { signupController, signIn,logOut } from '../controller/users/user.controller.js'

const userRouter = express.Router()

userRouter.post('/signup', signupController)

userRouter.post('/signin', signIn)
userRouter.get('/logout', logOut)

export default userRouter
