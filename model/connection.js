const mongoose = require('mongoose');

const markSchema = mongoose.Schema({
    name:String,
    reg_No:Number,
    subjectOne:{
      type:Number,
      default:0
    },
    subjectTwo:{
      type:Number,
      default:0
    },
    subjectThree:{
      type:Number,
      default:0
    },
    total:Number
   
});

const MarkList = mongoose.model('MarkList',markSchema);
module.exports = MarkList;