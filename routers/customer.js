const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const productsData = require('../utils/products');

const router = express.Router();

//console.log(productsData);

router.get('/', (req, res, next) => {
    console.log(productsData);
    const viewsData = {
        products: productsData.products,
        pageTitle: 'Home Page'
    };
    console.log(viewsData);
    res.render('index', viewsData);
});

router.get('/shop', (req, res, next) => {
    const viewsData = {
        products: productsData.products,
        pageTitle: 'Shop Page'
    };
    console.log(viewsData);
    res.render('shop', viewsData);
});

module.exports = router;