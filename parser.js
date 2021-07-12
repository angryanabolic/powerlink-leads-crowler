require('dotenv').config();

const db = require('./inc/database');
const api = require('./inc/api_powerlink');
const queryInterface = db.sequelize.getQueryInterface();

const start = async function() {
    let page = 1;

    api.getAccounts().then(async e => {
        await queryInterface.bulkInsert('accounts', e);
    });
}

start();
