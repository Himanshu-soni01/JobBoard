"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DB_USER, DB_DATABASE, DB_PASSWORD, DB_PORT, DB_HOST } = process.env;
const sequelize = new sequelize_1.Sequelize({
    dialect: "mysql",
    host: DB_HOST,
    port: parseInt(DB_PORT || "3306", 10),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});
exports.sequelize = sequelize;
