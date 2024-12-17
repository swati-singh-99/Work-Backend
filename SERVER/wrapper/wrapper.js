const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const execute = (query, params = []) => {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (err, results) => {
      if (err) {
        console.error("Error executing query:", err.message);
        return reject(err);
      }
      resolve(results);
    });
  });
};

const initializeDatabase = async () => {
  try {
    await execute('CREATE DATABASE IF NOT EXISTS mydb');
    await execute('USE mydb');
    await execute(`
      CREATE TABLE IF NOT EXISTS userdata (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        phone VARCHAR(25) NOT NULL UNIQUE
      );
    `);
    console.log('Database and table initialized successfully.');
  } catch (err) {
    console.error('Error initializing database:', err.message);
  }
};

initializeDatabase();

module.exports = { execute };
