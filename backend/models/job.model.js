import { application } from "express";
import mongoose from "mongoose";

const jobSchema =  new mongoose.Schema({
    crop:{
        type:String,
        required:true
       },
       quantity:{
           type:Number,
           required:true
          },
       expectedland:{
           type:String,
           required:true
       },
       location:{
           type:String,
           required:true
       },
   
       deadline:{
           type:String,
           required:true
          },
          price:{
           type:Number,
           required:true
          },
       
     company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
       },
       created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
       },
       applications:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application',
        
       }]
},{timestamps:true});
export const Job = mongoose.model("Job",jobSchema);