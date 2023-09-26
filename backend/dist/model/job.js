"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Job extends sequelize_1.Model {
}
exports.Job = Job;
Job.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    company: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    location: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    salary: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    postedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    postedBy: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: database_1.sequelize,
    modelName: "User",
    tableName: "users",
});
