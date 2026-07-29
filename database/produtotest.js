const { Sequelize, INTEGER, STRING, DECIMAL } = require('sequelize');
const database = require('./db');

const ProdutoTest = database.define('produto', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: STRING,
        allowNull: false

    },
    preco: {
        type: DECIMAL
    }
})

module.exports = ProdutoTest;