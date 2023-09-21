module.exports = (
  sequelize: {
    define: (
      arg0: string,
      arg1: {
        job_id: {
          type: any;
          autoIncrement: boolean;
          unique: boolean;
          primaryKey: boolean;
        };
        job_title: { type: any; allowNull: boolean; unique: boolean };
        job_type: { type: any; allowNull: boolean };
        job_cmpy_name: { type: any; allowNull: boolean };
        job_desc: { type: any; allowNull: boolean };
        job_emp_email: { type: any; allowNull: boolean };
      },
      arg2: { timestamps: boolean; createdAt: boolean; updatedAt: boolean }
    ) => any;
  },
  Sequelize: { INTEGER: any; STRING: any }
) => {
  const job_db = sequelize.define(
    "job",
    {
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
      job_emp_email:{
        type :Sequelize.STRING ,
        allowNull  :false,
      }
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return job_db;
};
