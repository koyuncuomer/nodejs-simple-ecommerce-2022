//const products = [];
const products = [{ title: 'Product 1' }, { title: 'Product 2' }, { title: 'Product 3' }, { title: 'Product 4' }, { title: 'Product 5' }, { title: 'Product 66' }];

/*
const db = require('../utils/database');
db.execute(`select * from products`).then(([data, fields]) => {
    console.log(data);
    data.forEach(element => {
        console.log(element.productName);
        products.push({ title: element.productName });
    });

}).catch((error) => {
    console.log(error);
});
*/

exports.saveProduct = (product) => {
    products.push(product);
};

exports.getAllProduct = () => {
    return products;
};
