import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/auth.route.js"
import dotenv from "dotenv"

dotenv.config({
    path:"./.env",
})

const app=express();
const port=3000;
const mongoURL="mongodb+srv://om:TeeUjnpAm8s7BFw@atlascluster.gs7pryc.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster"

app.use(express.json());
app.use("/api/v1/user", userRouter);

mongoose.connect(mongoURL)
.then(()=>app.listen(port))
.then(()=>console.log("The port is running on",port))
.catch((err)=>console.log(err))


