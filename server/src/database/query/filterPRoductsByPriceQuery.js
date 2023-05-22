import connection from "../config/connection.js";

const filterProductsByPriceQuery = (price) => {
  const sql = {
    text: `SELECT * FROM products WHERE price= $1 `,
    values: [price]
  };

  return connection.query(sql);
};

export {
  filterProductsByPriceQuery
};
