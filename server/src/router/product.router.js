import { createProduct } from '../controller/products/product.contrller'
import express from 'express'

const productRouter = express.Router()

productRouter.post('/product', createProduct)

export default productRouter
