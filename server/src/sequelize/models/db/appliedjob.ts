module.exports = (
  sequelize: {
    define: (
      arg0: string,
      arg1: {
        job_id: {
          type: any;
          unique: boolean;
          primaryKey: boolean;
        };
        user_email: { type: any; allowNull: boolean };
      },
      arg2: { timestamps: boolean; createdAt: boolean; updatedAt: boolean }
    ) => any;
  },
  Sequelize: { INTEGER: any; STRING: any }
) => {
  const appliedJob = sequelize.define(
    "appliedjob",
    {
      job_id: {
        type: Sequelize.INTEGER,
        unique: true,
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

  return appliedJob;
};
