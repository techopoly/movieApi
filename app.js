const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');


const mongoConnect = require('./util/database').mongoConnect;
const movie = require('./routes/movie');


const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //used for x-www-url-encoded <form>

app.use(express.json()) //used for application/json


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})



//getSymbols();

app.use(movie);
app.use('/', (req, res, next) => {
    res.status(200).json({
        message: 'path not found'
    })
})


mongoConnect(async () => {
    app.listen(process.env.PORT || 8051);
 // anything in this function runs after making sure db is already connected
});




