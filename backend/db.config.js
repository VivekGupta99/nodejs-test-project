const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize('companies', 'root', 'Sql@123',{
    host : 'localhost',
    port : 3306,
    dialect: 'mysql'
})

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize
db.companies = require(path.join(__dirname + '/model'))(sequelize, Sequelize);

module.exports =db;