require('dotenv').config({
    path: '/home/jeferson/Projetos/app-financas/database/postgres_db/.env'
});

const { Pool} = require('pg');

const conectionDB = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
});

module.exports = conectionDB;