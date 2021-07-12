const axios = require('axios')
const apiEndpoint = 'https://api.powerlink.co.il/api/query';
const apiToken = process.env.POWERLINK_TOKEN;
const defaultFields = {
    'objecttype': 1,
    'page_size': 500,
    'page_number': 1,
    'fields': '*',
    'sort_by': 'createdon',
    'sort_type': 'asc'
};
const defaultHeaders = {tokenid: apiToken};

const api = {
    getAccounts(page) {
        return new Promise((resolve, reject) => {
            axios
                .post(apiEndpoint, {...defaultFields, page_number: page ? page : 1}, {headers: defaultHeaders})
                .then(({data: {data: {Data}}}) => {
                    resolve(Data);
                })
                .catch(e => {
                    reject(e);
                });
        })
    },
    getColumns() {
        return new Promise((resolve, reject) => {
            axios
                .post(apiEndpoint, defaultFields, {headers: defaultHeaders})
                .then(({data: {data: {Columns}}}) => {
                    resolve(Columns);
                })
                .catch(e => {
                    reject(e);
                });
        })
    }
};

module.exports = api;
