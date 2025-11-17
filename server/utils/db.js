const mysql2 = require('mysql2')

const pool = mysql2.createPool({
    host: 'localhost',
    user:  'w3-93109',
    password: 'omkarkar',
    database:  'blogmanagement_db'

})

module.exports = pool