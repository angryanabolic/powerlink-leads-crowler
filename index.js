require('dotenv').config();

const { QueryTypes } = require('sequelize');
const db = require('./database');

const start = async function() {
    const users = await db.sequelize.query("SELECT 1 as test", {type: QueryTypes.SELECT});
    console.log(users);
}

start();
