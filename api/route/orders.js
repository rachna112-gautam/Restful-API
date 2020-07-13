const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders were fetched'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'orders was created'
    })
})

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'updated order',
        id: req.params.orderId
    })
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'orders deleted',
        id: req.params.orderId
    })
})
module.exports = router;