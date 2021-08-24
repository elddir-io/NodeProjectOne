const path = require('path'); // node core module

const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) => {    
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // up one level to root folder, into views folder, and serves the shop file
});

module.exports = router;
