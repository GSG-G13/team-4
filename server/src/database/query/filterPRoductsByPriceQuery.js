import connection from "../config/connection";

const filterProductsByPriceQuery = (minPrice, maxPrice) => {
  const sql = {
    text: `SELECT * FROM products WHERE price >= $1 AND price <= $2`,
    values: [minPrice, maxPrice]
  };

  return connection.query(sql);
};

export {
  filterProductsByPriceQuery
};
