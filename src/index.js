require('dotenv').config();

const { QueryTypes } = require('sequelize');
const db = require('./inc/database');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const users = await db.sequelize.query("SELECT * FROM accounts LIMIT 10", {type: QueryTypes.SELECT});
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(users));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
