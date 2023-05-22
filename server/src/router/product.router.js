import express from 'express';
import { createProduct } from '../controller/products/product.js'
import { getAllProductsController } from '../controller/products/getAllProductsController.js'
import { filterProductsByPriceController } from '../controller/products/filterProductsByPriceController.js';

const productRouter = express.Router()

productRouter.get('/products', getAllProductsController)
productRouter.get('/products/:price', filterProductsByPriceController)
productRouter.post('/product', createProduct)

export default productRouter
