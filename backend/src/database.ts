import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_DATABASE, DB_PASSWORD, DB_PORT, DB_HOST } = process.env;

const sequelize = new Sequelize({
  dialect: "mysql",
  host: DB_HOST,
  port: parseInt(DB_PORT || "3306", 10),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

export { sequelize };
