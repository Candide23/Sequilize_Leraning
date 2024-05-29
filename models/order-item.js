const Sequilize = require('sequelize')
const  sequelize  = require('../util/database')

const OrderItem = sequelize.define('orderItem', {
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true       
    },
    quantity: Sequilize.INTEGER
});

module.exports = OrderItem;