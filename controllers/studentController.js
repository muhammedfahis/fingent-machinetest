const MarkList = require('../model/connection')

async function getMarkListController(req,res) {

    try {
        const markList = await MarkList.find()
        if(markList){
        res.json(markList)
        }else{
        res.json({message:'NO DATA FOUND'})
        }
    } catch (error) {
        return {
            message:error.message
        }
    }
}


module.exports ={
    getMarkListController
}