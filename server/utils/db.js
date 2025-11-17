const mysql2 = require('mysql2')

const pool = mysql2.createPool({
    host: 'localhost',
    user:  'W3_93113_Tanmay',
    password: 'manager',
    database:  'blogmanagement_db'

})

module.exports = pool