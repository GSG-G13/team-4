import express from 'express'
import userRouter from './user.router.js'
import productRouter from './product.router.js'


const router = express.Router()
router.use(userRouter)
router.use(productRouter)

router.use(productRouter)

export default router
