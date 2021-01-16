const express = require('express');
const {jwtVerifiyer} = require('../libs/middlewares/middlewares')
const { TutorLoginController, addStudentMarkController, editListController, deleteStudentController } = require('../controllers/tutorControllers');
const router = express.Router();


router.post('/login',TutorLoginController);
router.post('/addlist',jwtVerifiyer,addStudentMarkController);
router.patch('/:id',jwtVerifiyer,editListController);
router.delete('/:id',jwtVerifiyer,deleteStudentController);




module.exports= router