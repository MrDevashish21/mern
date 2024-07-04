import User from "../models/auth.model.js";
import bcrypt from "bcrypt";
import { createToken } from "../middlewares/auth.middleware.js";

export const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const existingUser=await User.findOne({$or:[{email},{name}]})

        if(existingUser){
            return res.status(400).json({message:"User already exists."})
        }

        const hashPassword=await bcrypt.hash(password,10);

        const user=await User.create({
            name,
            email,
            password:hashPassword
        })

        const token=createToken(user._id, user.email);

    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message,
        })

    }
}

export const getAllUsers=async(req,res)=>{
    try{
        const users=await User.find();
        if(!users||users.length===0){
            return res.status(404).json({message:"no Users Found"})
        }

        res.status(200).json({
            success:true,
            users,
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })

    }
}
