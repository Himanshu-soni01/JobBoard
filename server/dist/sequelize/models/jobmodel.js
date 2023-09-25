"use strict";
module.exports = (sequelize, Sequelize) => {
    const job_db = sequelize.define("job", {
        job_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            unique: false,
            primaryKey: true,
        },
        job_title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false,
        },
        job_type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        job_cmpy_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        job_desc: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        job_emp_email: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    return job_db;
};
//# sourceMappingURL=jobmodel.js.map