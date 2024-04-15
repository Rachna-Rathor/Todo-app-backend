const express=require('express')
const app=express();
const mongoose=require("mongoose")
const db_config=require("./config/dataBase")
// load config from env file
require("dotenv").config();
const PORT=process.env.PORT || 8000;

// middlewares to parse json request body
app.use(express.json());

// import routes  from doto APi
const todoRoutes=require("./routes/todo")
// mount the todo APi routes
app.use("/api/v1",todoRoutes);

// server start
app.listen(PORT,()=>{
    console.log(`server start listening at ${PORT}`);
})

// connect to the database 
const dbConnect=require("./config/dataBase")
dbConnect();