import express from 'express'
import { getCartController } from '../controller/cart/getCart.js'
import auth from '../utilis/auth/auth.js'

const cartRouter = express.Router()
cartRouter.get('cart', auth, getCartController)
export default cartRouter
