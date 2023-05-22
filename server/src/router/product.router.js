import express from 'express';
import { createProduct, filterProductsByPriceController, getAllProductsController, filterProductByName, } from '../controller/products/product.js'


const productRouter = express.Router()

productRouter.get('/products', getAllProductsController)
productRouter.get('/allproducts/:price', filterProductsByPriceController)
productRouter.post('/product', createProduct)
productRouter.get('/products/:title', filterProductByName)

export default productRouter
