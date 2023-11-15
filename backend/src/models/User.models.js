import mongoose from 'mongoose'
import { validateEmail, validatePhoneNumber } from '../utils/validation.util';
import {uploadImageToCloudinary} from '../services/cloudinaryServices.service';

const userSchema =mongoose.Schema({
    username:{
        tyep:String,
        required:true,
        unique:true,
        minlength:[4,'Username must be at least 4 characters'],
        maxlength:[50,'Username cannot exceed 50 characters'],
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:validateEmail,
            message:'Invalid email address',
        },
    },
    password:{
        type:String,
        required:true,
        minlength:[8,'Password must be at least 8 charactres'],
    },
    profilePicture:{
        type:String,
    },
    phoneNumber:{
        type:String,
        validate:{
            validator:validatePhoneNumber,
            message:"Invalid phone number",
        },
    },
    college:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['Buyer','Seller','Both','None'],
        required:true,
        default:'None',
    },

},{timestemps:true});

userSchema.methods.uploadProfilePicture=function(fileBuffer){
    return uploadImageToCloudinary(fileBuffer)
    .then((imageUrl)=>{
        this.profilePicture=imageUrl;
    })
}

export const User=mongoose.model('User',userSchema);
