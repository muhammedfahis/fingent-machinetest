const express = require('express');
const router = express.Router();

const urlRouter = require('./url');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.status(200).send({
        success:true,
        title: 'Nodejs URL shortner Project '
    });
});

router.use('/url', urlRouter);
module.exports = router;