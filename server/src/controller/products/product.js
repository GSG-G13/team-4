import { productQuery, getHomeProduct, getProductsByTitleQuery } from '../../database/query/product.query.js'

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

const homeProduct = async (req, res) => {
  try {
    const data = await getHomeProduct()
    res.status(200).json(data.rows)
  } catch (err) {
    console.log(err)
  }
}

const filterProductByName = async (req, res) => {
  try {
    const { title } = req.params
    const data = await getProductsByTitleQuery( title )
    res.status(200).json(data.rows)
  } catch (err) {
    console.log(err)
  }
}

export { createProduct, homeProduct,filterProductByName }
