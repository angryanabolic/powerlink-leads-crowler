require('dotenv').config();

const db = require('./inc/database');
const api = require('./inc/api_powerlink');
const { DataTypes } = require('sequelize');
const queryInterface = db.sequelize.getQueryInterface();

const columnsSchema = {
    accountid: {
        type: DataTypes.UUID,
    },
    ownerid: {
        type: DataTypes.UUID,
    },
    createdby: {
        type: DataTypes.UUID,
    },
    modifiedby: {
        type: DataTypes.UUID,
    },
    createdon: {
        type: DataTypes.DATE
    },
    modifiedon: {
        type: DataTypes.DATE
    }
};

const sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})

const start = async function() {
    api.getColumns().then(async e => {
        let columns = {};
        e.map(col => {
            let columnName = col.fieldname;
            let defaultType = col.maxlength && col.maxlength > 0 ? DataTypes.STRING(col.maxlength) : DataTypes.TEXT;
            let columnSchema = columnsSchema.hasOwnProperty(columnName) ? columnsSchema[columnName] : {type: defaultType};
            columnSchema['comment'] = col.name;
            columns[columnName] = columnSchema;
        });
        await queryInterface.createTable('accounts', sortObject(columns));
    });
}

start();
