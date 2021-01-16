const express = require('express');
const {jwtVerifiyer} = require('../libs/middlewares/middlewares')
const { TutorLoginController, addStudentMarkController, editListController, deleteStudentController } = require('../controllers/tutorControllers');
const router = express.Router();

/**
 * @api {post} /tutor/login
 * @apiName TutorLogin
 * @apiGroup Tutor
 * @apiParam {String} [email] email of tutor.
 * @apiParam {String} [password] password of tutor.
 *
 * @apiSuccess (200) {String} message TUTOR LOGGED SUCCESSFULLY.
 * @apiSuccess (200) {String} token TOKEN.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "message": "TUTOR LOGGED SUCCESSFULLY",
 *      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR1dG9yQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjEwODI4MjY2fQ.7fpTmXvPvf1wZbYwVw0ybZQfpSTbq6LdHcg9leCQ48g"
 *    }
 *
 * @apiError LoginFailed INCORRECT USERNAME OR PASSWORD.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "INCORRECT USERNAME OR PASSWORD"
 *      }
 */

router.post('/login',TutorLoginController);



/**
 * @api {post} /tutor/addlist
 * @apiName addStudent
 * @apiGroup Tutor
 * @apiHeader {String} Authorization JwtToken
 * @apiParam {String} [name] Name Of Student
 * @apiParam {String} [reg_No] Register Number Of Student.
 * @apiParam {String} [subOne] Mark Of Subject One.
 * @apiParam {String} [subTwo] Mark Of Subject Two.
 * @apiParam {String} [subThree] Mark Of Subject Three.
 * @apiParam {String} [total] Total Marks.
 *
 * @apiSuccess (201) {Object} newList Added Details Of New Students.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *   {
 *       "newList": {
 *           "subjectOne": 54,
 *           "subjectTwo": 78,
 *           "subjectThree": 87,
 *           "_id": "60034f96fdd5e2e51b53011a",
 *           "name": "farhan",
 *           "reg_No": 54,
 *           "total": 534,
 *           "__v": 0
 *                   }
 *   }
 *
 * @apiError SOMETHING WENT WRONG INVALID NAME.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "INVALID NAME"
 *      }
 */
router.post('/addlist',jwtVerifiyer,addStudentMarkController);




/**
 * @api {patch} /tutor/:id  
 * @apiName Edit Student
 * @apiGroup Tutor
 * @apiHeader {String} Authorization JwtToken
 * @apiParam {String} id Id Of Student
 * @apiParam {String} [name] Name Of Student 
 * @apiParam {String} [reg_No] Register Number Of Student.
 * @apiParam {String} [subOne] Mark Of Subject One.
 * @apiParam {String} [subTwo] Mark Of Subject Two.
 * @apiParam {String} [subThree] Mark Of Subject Three.
 * @apiParam {String} [total] Total Marks.
 *
 * @apiSuccess (200) {String} message STUDENT UPDATED SUCCESSFULLY.
 * @apiSuccess (200) {Object} updatedList Updated Details Of  Student.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *   "message": "STUDENT UPDATED SUCCESSFULLY",
 *   "updatedList": {
 *       "subjectOne": 54,
 *       "subjectTwo": 78,
 *       "subjectThree": 87,
 *       "_id": "6003546c17aadfeba3cc8f06",
 *       "name": "fsg",
 *       "reg_No": null,
 *       "total": 534,
 *       "__v": 0
 *       }
 *   }
 *
 */
router.patch('/:id',jwtVerifiyer,editListController);


/**
 * @api {delete} /tutor/:id  
 * @apiName Delete Student
 * @apiGroup Tutor
 * @apiParam {String} id Id Of Student
 * 
 * 
 *  
 * @apiSuccess (200) {String} message ITEM WITH THE {id} HAS BEEN DELETED.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *   "message": "ITEM WITH THE 6003546c17aadfeba3cc8f06 HAS BEEN DELETED"
 *   }
 *
 */

router.delete('/:id',jwtVerifiyer,deleteStudentController);




module.exports= router