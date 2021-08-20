const express = require ('express');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({extended: true}));

const app = express();
    app.get('/', (req,res) => {
        res.send('Server is up and running');
    });



app.listen(3000, (req, res) => {
    console.log('server listening on port 3000')
});