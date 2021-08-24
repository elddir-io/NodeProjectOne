const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/shop', (req,res,next) => {
    
    // res.sendFile(__dirname + "../shop.html");
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // up one level to root folder, into views folder, and serves the shop file
});

 module.exports = router;