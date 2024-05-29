const Sequelize = require('sequelize');

const sequelize = require ('../util/database');

const Cart = sequelize.define('Cart',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: {
    type: Sequelize.INTEGER,

  }
});

module.exports = Cart;