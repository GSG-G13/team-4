import express from 'express'
import { getCartController } from '../controller/cart/getCart.js'
import auth from '../utilis/auth/auth.js'
import { addCartController } from '../controller/cart/addCart.js'
import { removeCartController } from '../controller/cart/removeProduct.js'
import { getTotalPriceController } from '../controller/cart/getTotalPriceItems.js'

const cartRouter = express.Router()
cartRouter.get('/cart', auth, getCartController)
cartRouter.post('/cart/:productId', auth, addCartController)
cartRouter.delete('/deletecart/:productId', auth, removeCartController)
cartRouter.get('/totalprice', auth, getTotalPriceController)
export default cartRouter