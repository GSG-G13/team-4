BEGIN;

DROP TABLE IF EXISTS users, products,  cart,productCart CASCADE;

CREATE TABLE users(
  
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  admin BOOLEAN NOT NULL
);

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image TEXT,
  price DECIMAL,
  count INTEGER,
  category TEXT
);

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE productCart(
  cart_id INTEGER NOT NULL REFERENCES cart(id) ON UPDATE CASCADE ON DELETE CASCADE,
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
  count INTEGER
);

INSERT INTO users (username, password, email, admin)
VALUES (
  'admin',
  '$2b$10$RFDRKHVXROrWKcgxFJB7kupVM/e3WQzUqnIG7yiLb3hGQokbFaoZS',
  'admin@gmail.com',
  true
);

INSERT INTO products (title, image, description, price, count, category)
VALUES (
  'Iphone-14-ProMax',
  'data:image/jpeg;base64,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',
  'This is my post for the place',
  400,
  2,
  'phone'
),
(
  'Iphone-7',
  'http://flatsometutorial.com/wp-content/uploads/2023/01/product-4-600x600.jpg',
  'This is my post for the place',
  500,
  1,
  'phone'
),
(
  'Laptop Acer',
  'http://flatsometutorial.com/wp-content/uploads/2023/01/product-1-600x600.jpg',
  'This is my post for the place',
  900,
  3,
  'laptop'
),
(
  'Laptop Msi GF-65',
  'http://flatsometutorial.com/wp-content/uploads/2023/01/REFURBISHED-AND-NEW-LAPTOPS-FOR-SELL-BEST-600x600.jpg',
  'This is my post for the place',
  1000,
  1,
  'laptop'
),
(
  'Apple Watch',
  'http://flatsometutorial.com/wp-content/uploads/2023/01/pink-watch.jpg',
  'This is my post for the place',
  350,
  4,
  'accessories'
),
(
  'New Watch',
  'http://flatsometutorial.com/wp-content/uploads/2023/01/Image-28-600x600.jpg',
  'This is my post for the place',
  500,
  2,
  'accessories'
),
(
  'Android iPhone',
  'http://flatsometutorial.com/wp-content/uploads/2023/01/product-09-414x414-1.jpg',
  'This is my post for the place',
  800,
  4,
  'phone'
),
(
  'Headphones',
  'http://flatsometutorial.com/wp-content/uploads/2023/01/Image-1-600x600.jpg',
  'This is my post for the place',
  100,
  9,
  'accessories'
);

COMMIT;
