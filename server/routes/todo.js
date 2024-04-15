const express=require("express")

const router=express.Router();

// import controller
const createTodo=require("../controllers/createTodo");
const updateTodo=require("../controllers/updateTodo")
const deleteTodo=require("../controllers/deleteTodo")
const getTodo=require("../controllers/getTodo")

// define API routers
router.post("/createTodo",createTodo.createTodo);
router.put("/updateTodo/:id",updateTodo.updateTodo);
router.delete("/deleteTodo/:id",deleteTodo.deleteTodo);
router.get("/getTodo/:id",getTodo.getTodo);



module.exports=router;