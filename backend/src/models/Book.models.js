import mongoose, { mongo } from "mongoose";

const bookSchema=mongoose.Schema({

    title:{
        type:String,
        required:true,
        minlength:[4,'Title must be at least 4 chatacters'],
        maxlength: [100, 'Title cannot exceed 100 characters'],  
    },
    author: {
        type: String,
        required: true,
        minlength: [2, 'Author name must be at least 2 characters'],
        maxlength: [50, 'Author name cannot exceed 50 characters'],
      },
    edition: {
        type: String,
        maxlength: [50, 'Edition information cannot exceed 50 characters'],
      },
    condition: {
        type: String,
        enum: ['New', 'Like New', 'Good', 'Fair'],
        required: true,
      },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Description must be at least 10 characters'],
        maxlength: [1000, 'Description cannot exceed 1000 characters'],
      },
    price: {
        type: Number,
        required: true,
        min: [0.01, 'Price must be at least 0.01'],
        max: [1000, 'Price cannot exceed 1000'],
      },
    images: {
        type: [String], 
      },
    college: {
        type: String,
      },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    status: {
        type: String,
        enum: ['Active', 'Sold', 'Inactive'],
        required: true,
      },
    

},{timestemps:true});