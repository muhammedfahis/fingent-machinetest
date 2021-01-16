const { jwtSignInFunction } = require("../libs/jwt/jwtFunctions");
const MarkList = require('../model/connection');
const mongoose = require('mongoose');


const tutor ={
    email:'tutor@gmail.com',
    password:'123'
}
 
async function TutorLoginController(req,res) {
  const {email,password} = req.body
    try {
        if(!email){
            res.sendStatus(400).json({message:'EMAIL NOT FOUND'});
            return;
        }
        if(!password){
            res.sendStatus(400).json({message:'PASSWORD NOT FOUND'})
            return;
        }
        if(email === tutor.email && password === tutor.password){
           const token = await jwtSignInFunction(tutor);
            res.json({
                message:'TUTOR LOGGED SUCCESSFULLY',
                token
            })
        }else{
            res.json({
                message:'INCORRECT USERNAME OR PASSWORD'
            })
        }
    } catch (error) {
        return{
            messsage:error.messsage
        }
    }

    
}


async function addStudentMarkController(req,res) {

    const {name,reg_No,subOne,subTwo,subThree,total} = req['body']

    if(!name){
        res.json({message:'INVALID NAME'});
        return;
    }
    if(!reg_No){
        res.json({message:'INVALID REGISTER NUMBER'})
        return;
    }
    if(!total){
        res.json({message:'TOTAL NOT FOUND'})
        return;
    }
    
    const newList =  MarkList({
        name:name ,
        subjectOne:subOne || 0,
        reg_No:reg_No ,
        subjectTwo:subTwo || 0,
        subjectThree:subThree || 0,
        total:total 
    });

    try {
        if(newList){
            await newList.save()
            res.status(201).json({
                newList
            })
        }else{
            res.status(409).json({
                message:'SOMETHING WENT WRONG'
            })
        }
    } catch (error) {
        return{
            message:error.messsage
        }
    }
    
    
}


async function editListController(req,res) {

    const {id} = req.params
    const list = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))return res.status(404).send('No data with the id');

    try {
        const updatedList = await MarkList.findByIdAndUpdate(id,list,({new:true}));
        res.json({
            message:'STUDENT UPDATED SUCCESSFULLY',
            updatedList
        })
    } catch (error) {
        return{
            message:error.messsage
        }
    }

    
}

async function deleteStudentController(req,res) {
    const{ id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))return res.status(404).send('No data with the id');
    try {
        await MarkList.findByIdAndRemove(id)
        res.json({message:`ITEM WITH THE ${id} HAS BEEN DELETED`})
    } catch (error) {
        return{
            message:error.messsage
        }
    }
}



module.exports={
    TutorLoginController,
    addStudentMarkController,
    editListController,
    deleteStudentController
}