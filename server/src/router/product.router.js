import express from 'express';
import { createProduct, filterProductsByPriceController, getAllProductsController, filterProductByName, } from '../controller/products/product.js'
import auth from '../utilis/auth/auth.js';


const productRouter = express.Router()

productRouter.get('/products', getAllProductsController)
productRouter.get('/allproducts/:price', filterProductsByPriceController)
productRouter.post('/product',auth, createProduct)
productRouter.get('/products/:title', filterProductByName)

export default productRouter
