import connection from "../config/connection.js";


const signupQuery = ({ username, email, password, role }) => {
  console.log(role);
  const sql = {
    text: `INSERT INTO users (username, email, password, admin)
    VALUES($1,$2,$3,$4)
    RETURNING id, username,email, admin
    `,
    values: [username, email, password, role]
  }

  return connection.query(sql)
}

const signInQuery = ({ username }) => {
  const sql = {
    text: `SELECT * FROM users WHERE username = $1`,
    values: [username],
  };
  return connection.query(sql);
}

const getUserData = ({ userId }) => {
  const sql = {
    text: `SELECT * FROM users WHERE user.id = $1`,
    values: [userId],
  };
  return connection.query(sql);
}

export { signupQuery, signInQuery, getUserData };
