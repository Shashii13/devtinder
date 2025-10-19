const mongoose = require('mongoose');
const validator=require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        unique: true,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email address");
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("is not strobg password");
            }
        }

    },
    age: {
        type: Number,
        min: 18,
    },
    gender: {
        type: String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("gender data is not valid");
            }
        },
    },
    photoUrl:{
        type: String,
        default:"https://rapidapi.com/mageshkannanam/api/dummy-user1",
         validate(value){
            if(!validator.isURL(value)){
                throw new Error("invalid photo url");
            }
        }
    },
    about:{
        type:String,
        default:"tgis is default of user"
    },
    skills: {
        type:[String],
    },
},
    {
        timestamps: true,
    }
);

// ✅ Correct way to create model
const User = mongoose.model("User", userSchema);

// ✅ Correct way to export
module.exports = User;
