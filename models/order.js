const Sequilize = require('sequelize')
const  sequelize  = require('../util/database')

const Order = sequelize.define('order', {
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true       
    },
    quantity: Sequilize.INTEGER
});

module.exports = Order;