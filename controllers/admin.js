const Product = require('../models/product');


exports.getAddProduct = (req,res,next) => {    
    res.render('admin/add-product', { 
        pageTitle: 'Add Product', 
        path: '/add-product',
        formsCSS: true,
        activeAddProduct: true
    });
};


exports.postAddProduct = (req,res,next) => {
    const product = new Product(req.body.title);  
    product.save();
    res.redirect('/');
}