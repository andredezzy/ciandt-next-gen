const fetch = require("node-fetch"); // Import 'node-fetch'

const API_URL =
    "https://api-nextgen.ciandt.com/api/challenge/nextgen/question-7";
const JWT_TOKEN =
    "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzAxOTA3NTY2NTUzMGRmZDViNzMxMSIsImlhdCI6MTU3Mjk5MjExMywiZXhwIjoxNTczMDc4NTEzfQ.qfb1P8mfsLbW5Lj32MTARBm-52y2eUUK_P-8F6yPGTE";

function run() {
    const _sortByDate = (arr, dateField) => {
        return arr.sort((a, b) => {
            return new Date(a[dateField]) - new Date(b[dateField]);
        })
    }

    const _findIndexWhere = (arr, field, value) => {
        for (let index in arr) {
            const obj = arr[index];

            if(obj[field] === value) return index;
        }
    }

    fetch(API_URL, { headers: { Authorization: JWT_TOKEN } })
        .then(response => response.json())
        .then(json => {
            const transmissions = json.transmissoes;

            const sortedTransmissions = _sortByDate(transmissions, 'data');
            const indexWhere = _findIndexWhere(sortedTransmissions, 'codigo', 'zfIymAbIbI');

            console.log(sortedTransmissions);
            console.log(indexWhere);
        });
}

run();
