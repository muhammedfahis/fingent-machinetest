const express = require('express');
const { getMarkListController } = require('../controllers/studentController');
const router = express.Router();


router.get('/',getMarkListController);



module.exports = router;