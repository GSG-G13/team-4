import { productQuery } from '../../database/query/product.query.js'

const createProduct = async (req, res) => {
  try {
    const { title, description, image, price, category } = req.body
    await productQuery({ title, description, image, price, category })

    res.status(201).json({
      error: false,
      data: {
        message: 'Your product has been created successfully'
      }
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: true,
      data: {
        message: 'An error occurred while creating your product'
      }
    })
  }
}

export { createProduct }
