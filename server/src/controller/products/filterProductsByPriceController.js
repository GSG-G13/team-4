
import { filterProductsByPriceQuery } from "../../database/query/filterPRoductsByPriceQuery";

const filterProductsByPriceController = async (req, res) => {
  try {
    const { minPrice, maxPrice } = req.query;
    const products = await filterProductsByPriceQuery(minPrice, maxPrice);
    res.json(products.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export {filterProductsByPriceController}