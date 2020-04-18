const express = require('express');
const webRoutes = require('./routes/web.js');
const pug = require('pug');
const path = require('path');

const app = express();

app.use(express.static('client/public'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client/src/views'));

app.use(webRoutes);

app.listen(process.env.PORT || 3000, () =>{
    console.log("Connected to port:3000");
})

var pass ="johnny2341"; 
