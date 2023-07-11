const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../configs/db.config')

const sequelize = new Sequelize(dbConfig.NAME, dbConfig.USER, dbConfig.PASS, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    operatorAliases: false,
    logging: false
});


const db = {}
db.sequelize = sequelize;
db.models = {}

// start adding models path's (Item Model)
db.models.Item = require('./item.model')(sequelize, DataTypes);

module.exports = db;