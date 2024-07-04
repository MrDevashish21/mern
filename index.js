import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/auth.route.js"

const app=express();
const port=3000;
const mongoURL="mongodb+srv://harshalhonde17:harshal172003@cluster0.b0mwyen.mongodb.net/Blogs?retryWrites=true&w=majority"

app.use(express.json());
app.use("/api/v1/user", userRouter);

mongoose.connect(mongoURL)
.then(()=>app.listen(port))
.then(()=>console.log("The port is running on",port))
.catch((err)=>console.log(err))

