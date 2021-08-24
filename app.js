const path = require('path');
const express = require ('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({extended: false})); // deprication of body-parser, so using built-in express body-parser

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// app.use((req,res,next) => {});
// app.send((req,res) => {});


// app.get('/', (req,res) => {
//     res.sendFile(__dirname + "../index.html");
// });

app.listen(3000, (req, res) => {
    console.log('server listening on port 3000')
});