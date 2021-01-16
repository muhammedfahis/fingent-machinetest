const express = require('express');
const { getMarkListController } = require('../controllers/studentController');
const router = express.Router();



/**
 * @api {get} /student 
 * @apiName Get All Results
 * @apiGroup Student
 * 
 *
 * @apiSuccess (200) {Object[]} Results All Results.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  [
 *   {
 *       "subjectOne": 54,
 *       "subjectTwo": 78,
 *       "subjectThree": 87,
 *       "_id": "60034f96fdd5e2e51b53011a",
 *       "name": "musthu",
 *       "reg_No": 54,
 *       "total": 534,
 *       "__v": 0
 *   },
 *   {
 *       "subjectOne": 47,
 *       "subjectTwo": 95,
 *       "subjectThree": 46,
 *       "_id": "6003537c17aadfeba3cc8f05",
 *       "name": "faiha",
 *       "reg_No": 24,
 *       "total": 422,
 *       "__v": 0
 *   }
 *   ]
 *
 */


router.get('/',getMarkListController);



module.exports = router;