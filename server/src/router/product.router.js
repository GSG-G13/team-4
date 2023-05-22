import express from 'express';
import { createProduct, filterProductsByPriceController, getAllProductsController } from '../controller/products/product.js'


const productRouter = express.Router()

productRouter.get('/products', getAllProductsController)
productRouter.get('/products/:price', filterProductsByPriceController)
productRouter.post('/product', createProduct)

export default productRouter
