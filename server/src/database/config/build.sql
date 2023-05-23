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
  category TEXT
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
);

INSERT INTO products (title, image, description, price, count)
VALUES (
  'iphone',
  'https://imgs.search.brave.com/tCv_y1U67Wzg7I14UkXyw8JoIhRFEBNT7D86WELQvYU/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/U3UyUmNDY2RtNzh4/YnhOREpNSlNnSGFF/byZwaWQ9QXBp',
  'This is my post for the place',
  200,
  2
),
(
  'iphone',
  'https://imgs.search.brave.com/tCv_y1U67Wzg7I14UkXyw8JoIhRFEBNT7D86WELQvYU/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/U3UyUmNDY2RtNzh4/YnhOREpNSlNnSGFF/byZwaWQ9QXBp',
  'This is my post for the place',
  500,
  1
);


COMMIT;

-- C:/Users/hp/Desktop/team-4/server/src/database/config/build.sql

-- User Table:

-- user_id (Primary Key)
-- username
-- password
-- email
-- first_name
-- last_name
-- address
-- phone_number

-- Product Table:

-- product_id (Primary Key)
-- name
-- description
-- price
-- quantity
-- category_id (Foreign Key)
-- Category Table:

-- category_id (Primary Key)
-- name
-- description
-- Order Table:

-- order_id (Primary Key)
-- user_id (Foreign Key)
-- order_date
-- total_amount
-- Order Item Table:

-- order_item_id (Primary Key)
-- order_id (Foreign Key)
-- product_id (Foreign Key)
-- quantity
-- unit_price
-- Cart Table:

-- cart_id (Primary Key)
-- user_id (Foreign Key)
-- Cart Item Table:

-- cart_item_id (Primary Key)
-- cart_id (Foreign Key)
-- product_id (Foreign Key)
-- quantity
-- unit_price
-- Payment Table:

-- payment_id (Primary Key)
-- order_id (Foreign Key)
-- payment_date
-- amount
-- payment_method

-- Review Table:

-- review_id (Primary Key)
-- user_id (Foreign Key)
-- product_id (Foreign Key)
-- rating
-- comment
-- review_date
-- Address Table:

-- address_id (Primary Key)
-- user_id (Foreign Key)
-- address_line1
-- address_line2
-- city
-- state
-- postal_code
-- country
