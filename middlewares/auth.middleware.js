import jwt from "jsonwebtoken";
import User from "../models/auth.model.js";

export const createToken=()=>{
    const token=jwt.sign(
        {
            id,
            email,
        },
        process.env.SECRET,
        {
            expiresIn:"2d",
        })
        return token;
}
export const isAuthenticated=(req,res,next)=>{
    try{
        const token=req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(401).json({
                success:false,
                isLogin:false,
                message:"No Token Found",
            })
        }
        jwt.verify(token,process.env.SECRET, async(err,user)=>{
            if(err){
                return res.status(401).json({
                    success:false,
                    isLogin:false,
                    message:err.message,
                })
            }
            req.user=await User.findById(user.id)
            next()
        })
    }catch(error){
        return res.status(501).json({
            success:false,
            message:error.message,
        })

    }
}