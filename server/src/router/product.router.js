import express from 'express';
import { createProduct } from '../controller/products/product.contrller'
import { getAllProductsController } from '../controller/products/getAllProductsController.js';

const productRouter= express.Router()

productRouter.get('/products', getAllProductsController)
productRouter.post('/product', createProduct)

export default productRouter
