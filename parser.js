require('dotenv').config();

const db = require('./inc/database');
const api = require('./inc/api_powerlink');
const queryInterface = db.sequelize.getQueryInterface();

const start = async function () {
    let fillAccounts = async p => {
        console.log('Page:' + p);
        let accounts = await api.getAccounts(p);
        try {
            await queryInterface.bulkInsert('accounts', accounts);
        } catch ({errors}) {
            console.error(errors);
        }
        if (accounts.length === api.defaultPageSize) {
            await fillAccounts(p + 1);
        }
    };
    await fillAccounts(1);
}

start();
