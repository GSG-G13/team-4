BEGIN;

DROP TABLE IF EXISTS users, products,  cart,productCart,  CASCADE;

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
  '$dj33jjkhkhdgk54646*jkjd.ljsfjkjkhdnjghj',
  'admin@gmail.com',
  true
);

-- INSERT INTO products (title, image, description, price, count)
-- VALUES (
--   'iphone',
--   'https://imgs.search.brave.com/tCv_y1U67Wzg7I14UkXyw8JoIhRFEBNT7D86WELQvYU/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/U3UyUmNDY2RtNzh4/YnhOREpNSlNnSGFF/byZwaWQ9QXBp',
--   'This is my post for the place',
--   200,
--   2
-- ),
-- (
--   'iphone',
--   'https://imgs.search.brave.com/tCv_y1U67Wzg7I14UkXyw8JoIhRFEBNT7D86WELQvYU/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/U3UyUmNDY2RtNzh4/YnhOREpNSlNnSGFF/byZwaWQ9QXBp',
--   'This is my post for the place',
--   500,
--   1
-- );


COMMIT;

-- C:/Users/hp/Desktop/team-4/server/src/database/config/build.sql