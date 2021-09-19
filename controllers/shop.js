const Product = require('../models/product');




exports.getProducts = (req,res,next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { 
            prods: products,
            pageTitle: 'product-list', 
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });      
}