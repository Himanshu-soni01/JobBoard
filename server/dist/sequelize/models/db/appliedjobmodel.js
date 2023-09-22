"use strict";
module.exports = (sequelize, Sequelize) => {
    const appliedJob = sequelize.define("appliedjob", {
        job_id: {
            type: Sequelize.INTEGER,
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
    appliedJob.belongsTo(sequelize.models.job, {
        foreignKey: "job_id",
    });
    return appliedJob;
};
//# sourceMappingURL=appliedjobmodel.js.map