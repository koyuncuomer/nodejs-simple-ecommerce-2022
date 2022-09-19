const { saveProduct } = require("../models/products");

exports.getAddProductPage = (req, res) => {
    const viewsData = {
        pageTitle: 'Add Product'
    };
    res.render('add-product', viewsData);
};

exports.postAddProductPage = (req, res) => {
    const product = {
        title: req.body.title
    };
    saveProduct(product);
    res.redirect('/');
};