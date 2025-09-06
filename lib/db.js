import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "shortline.proxy.rlwy.net",
  user: "root",
  password: "rGfJPMZxujpIMvkqrXDnBbDcmDKvshAs",
  database: "school",  // match your schema name from Workbench
  port: 41439,
});

// Export pool
export default pool;

// Export getConnection function
export async function getConnection() {
  return await pool.getConnection();
}
