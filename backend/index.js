import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;

const app=express();

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));




app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`);
})




