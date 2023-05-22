import express from 'express';
import { createProduct,filterProductByName } from '../controller/products/product.js'
import { getAllProductsController } from '../controller/products/getAllProductsController.js';

const productRouter = express.Router()

productRouter.get('/products', getAllProductsController)
productRouter.post('/product', createProduct)
productRouter.get('/products/:title', filterProductByName)

export default productRouter
