import express from 'express';

const productRouter= express.Router()
import { getAllProductsController } from '../controller/products/getAllProductsController.js';

productRouter.get('/products', getAllProductsController)



export default productRouter;