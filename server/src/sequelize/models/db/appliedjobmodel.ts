module.exports = (sequelize: any, Sequelize: any) => {
  const appliedJob = sequelize.define(
    "appliedjob",
    {
      job_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  appliedJob.belongsTo(sequelize.models.job, {
    foreignKey: "job_id",
  });
  return appliedJob;
};
