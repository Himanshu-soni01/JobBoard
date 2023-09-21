"use strict";
module.exports = (sequelize, Sequelize) => {
    const appliedJob = sequelize.define("appliedjob", {
        job_id: {
            type: Sequelize.INTEGER,
            unique: true,
            primaryKey: true,
        },
        user_email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    return appliedJob;
};
//# sourceMappingURL=appliedjob.js.map