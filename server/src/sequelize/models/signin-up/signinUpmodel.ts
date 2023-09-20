module.exports = (
  sequelize: {
    define: (
      arg0: string,
      arg1: {
        first_name: { type: any; allowNull: boolean; unique: boolean };
        last_name: { type: any; allowNull: boolean; unique: boolean };
        email: {
          type: any;
          allowNull: boolean;
          unique: boolean;
          primaryKey: boolean;
        };
        dob: { type: any; allowNull: boolean; unique: boolean };
        password: { type: any; allowNull: boolean; unique: boolean };
        isAdmin: { type: any; allowNull: boolean; defaultValue: boolean };
      },
      arg2: { timestamps: boolean; createdAt: boolean; updatedAt: boolean }
    ) => any;
  },
  Sequelize: { STRING: any; DATEONLY: any; BOOLEAN: any }
) => {
  const signinup = sequelize.define(
    "signinUp",
    {
      first_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      dob: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        unique: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return signinup;
};
