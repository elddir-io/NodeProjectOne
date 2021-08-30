const path = require('path'); // node core module

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req,res,next) => { 
    const products = adminData.products; 
    res.render('shop', { 
        prods: products,
        pageTitle: 'Shop', 
        path: '/'

    });
    
});

module.exports = router;


// console.log(adminData.products);  
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));  up one level to root folder, into views folder, and serves the shop file
