const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Salomone', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
