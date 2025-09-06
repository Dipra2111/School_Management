import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "shortline.proxy.rlwy.net",
  user: "root",
  password: "rGfJPMZxujpIMvkqrXDnBbDcmDKvshAs",
  database: "school", // use 'schooldb' if you imported under same name
  port: 41439,
});

export default pool;
