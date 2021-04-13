//import Sequelize constructor
const Sequelize = require('sequelize');

require('dotenv').config();

// Create a connection to our database
const sequelize = new Sequelize('just_tech_news_db', 'root', 'Batman5562', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
