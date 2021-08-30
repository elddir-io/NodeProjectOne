const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

products = [];

// /admin/add-product => GET
router.get('/add-product', (req,res,next) => {    
    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/add-product'
    });
});

// /admin/add-product => POST
router.post('/add-product', (req,res) => {
    products.push({ title: req.body.title });
    // console.log(title)
    res.redirect('/');
});

exports.routes = router;
exports.products = products;


