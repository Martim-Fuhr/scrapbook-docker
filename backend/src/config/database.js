import mysql from 'mysql2';
import 'dotenv/config';

export const database = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'familia123',
  database: process.env.DB_NAME || 'crud_desafio',
  authPlugins: {
    mysql_clear_password: () => () =>
      Buffer.from(process.env.DB_PASSWORD || 'familia123'),
  },
});

database.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log('connected as id ', database.threadId);
});
