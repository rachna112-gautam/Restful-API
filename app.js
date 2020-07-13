const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoute = require('./api/route/product');
const orderRoute = require('./api/route/orders');

app.use(morgan('dev'));
app.use('/product', productRoute);
app.use('/order', orderRoute);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        message: error.message
    })
})
module.exports = app;