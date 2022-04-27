  
const Mysqli = require('mysqli');


let conn = new Mysqli({
    host: 'localhost', // IP/domain name 
    port: 3306, // port, default 3306 
    user: 'root', // username 
    passwd: '123456789', // password 
    db: 'testdb'
});

let db = conn.emit(false, '');

module.exports = {
    database: db};