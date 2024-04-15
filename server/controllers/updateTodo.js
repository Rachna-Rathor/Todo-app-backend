const Todo = require("../models/todo.model");

const updateTodo = async (req, res) => {
    try {
       const { id } = req.params;
       const { title, description } = req.body;
       
       // Use Todo model directly for updating
       const updatedTodo = await Todo.findByIdAndUpdate(
           id, // Provide the ID directly
           { title, description, updatedAt: Date.now() }, // Update fields
           { new: true } // Set { new: true } to return the updated document
       );

       // Check if the todo was found and updated
       if (!updatedTodo) {
           return res.status(404).json({
               success: false,
               message: "Todo not found",
           });
       }

       // Send success response
       res.status(200).json({
           success: true,
           message: "Todo updated successfully",
           todo: updatedTodo, // Send the updated todo object
       });
    } catch (error) {
        // Handle any errors
        console.error("Error updating todo:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { updateTodo };
