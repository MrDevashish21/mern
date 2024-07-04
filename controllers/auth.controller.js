import User from "../models/auth.model.js";

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
