const mongoose = require('mongoose')


const ContactInfoSchema = new mongoose.Schema({
    fname:{
        type:String,
    },
   
    company:{
        type:String,
    },
   
    email:{
        type:String,
    },
    subject:{
            type:String,
    },
    message:{
        type:String,
    },
  

    Date:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model("contactInfo",ContactInfoSchema);
