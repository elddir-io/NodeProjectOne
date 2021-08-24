const express = require ('express');
require('dotenv').config();

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({extended: true})); // deprication of body-parser, so using built-in express body-parser

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

// app.use((req,res,next) => {});
// app.send((req,res) => {});











// app.get('/', (req,res) => {
//     res.sendFile(__dirname + "../index.html");
// });

app.listen(3000, (req, res) => {
    console.log('server listening on port 3000')
});