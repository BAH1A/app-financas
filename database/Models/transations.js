const { Sequelize, INTEGER, STRING, DECIMAL, BOOLEAN, DATEONLY } = require('sequelize');
const database = require('../Connection/db');

const Transations = database.define('transations', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: STRING,
        allowNull: false
    },
    transation: {
        type: STRING,
        allowNull: false
    },
    price: {
        type: DECIMAL,
        allowNull: false
    },
    category: {
        type: DECIMAL,
        allowNull: false,
    },
    status: {
        type: BOOLEAN,
        defaultValue: false,
    },
    note: {
        type: DECIMAL
    },
    data: {
        type: DATEONLY,
        //allowNull: false
    }
})

module.exports = Transations;