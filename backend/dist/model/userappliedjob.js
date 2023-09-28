"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppliedJob = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class AppliedJob extends sequelize_1.Model {
}
exports.AppliedJob = AppliedJob;
AppliedJob.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: false,
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
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    salary: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    appliedBy: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: database_1.sequelize,
    modelName: "AppliedJob",
    tableName: "AppliedJob",
});
