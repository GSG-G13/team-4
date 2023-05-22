import { createProduct } from '../controller/products/product.js'
import express from 'express'

const productRouter = express.Router()

productRouter.post('/product', createProduct)

export default productRouter
