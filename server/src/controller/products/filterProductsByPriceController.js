
import { filterProductsByPriceQuery } from "../../database/query/filterPRoductsByPriceQuery.js";

const filterProductsByPriceController = async (req, res) => {
  try {
    const {price} = req.params
    const products = await filterProductsByPriceQuery(price);
    res.json(products.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export {filterProductsByPriceController}