const path = require('path'); // node core module

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getProducts);

module.exports = router;


// console.log(adminData.products);  
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));  up one level to root folder, into views folder, and serves the shop file
