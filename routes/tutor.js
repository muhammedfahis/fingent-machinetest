const express = require('express');
const {jwtVerifiyer} = require('../libs/middlewares/middlewares')
const { TutorLoginController, addStudentMarkController, editListController, deleteStudentController } = require('../controllers/tutorControllers');
const router = express.Router();

/**
 * @api {post} /tutor/login
 * @apiName TutorLogin
 * @apiGroup User
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

router.post('/login',TutorLoginController);
router.post('/addlist',jwtVerifiyer,addStudentMarkController);
router.patch('/:id',jwtVerifiyer,editListController);
router.delete('/:id',jwtVerifiyer,deleteStudentController);




module.exports= router