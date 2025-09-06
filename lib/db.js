import mysql from "mysql2/promise";

export async function getConnection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",     // change this
    password: "Dipra@21112001",     // your MySQL password
    database: "schooldb"
  });
  return connection;
}
