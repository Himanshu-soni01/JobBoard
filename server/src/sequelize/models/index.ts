const dbConfig = require("../../sequelize/config/config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  define: {
    timestamps: false,
  },

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.signinUp = require("./signin-up/signinUpmodel")(sequelize, Sequelize);

module.exports = db;
