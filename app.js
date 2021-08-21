const express = require ('express');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({extended: true}));






// app.get('/', (req,res) => {
//     res.sendFile(__dirname + "/index.html");
// });

app.listen(3000, (req, res) => {
    console.log('server listening on port 3000')
});