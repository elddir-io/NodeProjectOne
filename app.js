const path = require('path');
const express = require ('express');
const ejs = require('ejs');
const errorController = require ('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({extended: true})); // deprication of body-parser, so using built-in express body-parser
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// app.use((req,res,next) => {});
// app.send((req,res) => {});


// app.get('/', (req,res) => {
//     res.sendFile(__dirname + "../index.html");
// });

app.listen(3000, (req, res) => {
    console.log('server listening on port 3000')
});