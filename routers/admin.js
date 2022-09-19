const express = require('express');
const { getAddProductPage, postAddProductPage } = require("../controllers/admin-product-controller");

const router = express.Router();

router.get('/add', getAddProductPage);

router.post('/add', postAddProductPage);

module.exports = router;