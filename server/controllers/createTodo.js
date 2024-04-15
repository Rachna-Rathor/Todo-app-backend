const Todo=require("../models/todo.model")

const createTodo = async (req, res) => {
    try {
        // Extract title and description from request body
        const { title, description } = req.body; // Corrected from discreption to description
        // Create a new todo object and insert it into the database
        const response = await Todo.create({ title, description });
        // Send a response back to the client
        res.status(201).json({
             message: "Todo created successfully", todo: response 
            });
    } catch (error) {
        // Handle any errors
        console.error("Error creating todo:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { createTodo };
