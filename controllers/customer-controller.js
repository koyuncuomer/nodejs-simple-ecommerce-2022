const { getAllProduct } = require("../models/products");

exports.getHomePage = (req,res)=>{
    const viewsData = {
        products: getAllProduct(),
        pageTitle: 'Home Page'
    };
    console.log(viewsData);
    res.render('index', viewsData);
}

exports.getShopPage = (req,res)=>{
    const viewsData = {
        products: getAllProduct(),
        pageTitle: 'Shop Page'
    };
    console.log(viewsData);
    res.render('shop', viewsData);
}


