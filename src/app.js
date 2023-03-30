const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const index = require('./routes/index');
const mailRoute = require('./routes/mailRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/', index);
app.use('/mail', mailRoute);

module.exports = app;