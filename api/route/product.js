const express = require('express');
const router = express.Router();


// Handling incoming get request to /product
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET Request'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST Request'
    })
})

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if(id === 'special')
    {
        res.status(200).json({
            message: 'you got a special id',
            id
        })
    }
    else{
        res.status(200).json({
            message: 'you passed an id',
            id
        })
    }
})

router.patch('/:productID', (req, res, next) => {
    
        res.status(200).json({
            message: 'Product modified!'
        })
   
})
router.delete('/:productID', (req, res, next) => {
    
    res.status(200).json({
        message: 'Product Deleted!'
    })

})
module.exports = router;
