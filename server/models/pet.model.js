const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Content is required"],
        minlength:[3,"Content must be atleast 3 characters"]
    },
    type:{
        type:String,
        required:[true,"Content is required"],
        minlength:[3,"Content must be atleast 3 characters"]
    },
    description:{
        type: String,
        required: [true,"Content is required"],
        minlength:[3,"Content must be atleast 3 characters"]
    },
    skill1:{
        type:String,
        required:[false]
    },
    skill2:{
        type:String,
        required:[false]
    },
    skill3:{
        type:String,
        required:[false]
    }
},{timestamps:true});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
