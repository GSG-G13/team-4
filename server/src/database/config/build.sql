BEGIN;

DROP TABLE IF EXISTS productCart, products, users CASCADE;

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
  category TEXT,
  user_id INTEGER NOT NULL REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE productCart(
  user_id INTEGER NOT NULL REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
  product_id INTEGER NOT NULL REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
  count INTEGER
);

INSERT INTO users (username, password, email, admin)
VALUES (
  'admin',
  '$dj33jjkhkhdgk54646*jkjd.ljsfjkjkhdnjghj',
  'admin@gmail.com',
  true
),
(
  'user',
  '$dj23jjkhkhdgk54646*jkjd.ljsfjkjkhdnjghf',
  'user@gmail.com',
  false
);

INSERT INTO products (title, image, description, price, count, user_id)
VALUES (
  'iphone',
  'https://imgs.search.brave.com/tCv_y1U67Wzg7I14UkXyw8JoIhRFEBNT7D86WELQvYU/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/U3UyUmNDY2RtNzh4/YnhOREpNSlNnSGFF/byZwaWQ9QXBp',
  'This is my post for the place',
  200,
  2,
  1
),
(
  'iphone',
  'https://imgs.search.brave.com/tCv_y1U67Wzg7I14UkXyw8JoIhRFEBNT7D86WELQvYU/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/U3UyUmNDY2RtNzh4/YnhOREpNSlNnSGFF/byZwaWQ9QXBp',
  'This is my post for the place',
  500,
  1,
  1
);

INSERT INTO productCart (user_id, product_id, count)
VALUES
(1, 1, 3),
(1, 1, 4),
(2, 2, 2),
(2, 2, 3);

COMMIT;

-- C:/Users/hp/Desktop/team-4/server/src/database/config/build.sql

