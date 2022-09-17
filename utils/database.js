const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
});

module.exports = db.promise();

/*
db.execute(`select * from products`).then(([data,fields]) => {
    console.log('database data ',data);
}).catch((error) => {
    console.log(error);
});
*/