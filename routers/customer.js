const express = require('express');

const { getHomePage, getShopPage } = require('../controllers/customer-controller');

const router = express.Router();

router.get('/',getHomePage);

router.get('/shop',getShopPage);

module.exports = router;