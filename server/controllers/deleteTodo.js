const Todo=require("../models/todo.model")

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        
        // Check if the todo was found and updated
       if (!deleteTodo) {
        return res.status(404).json({
            success: false,
            message: "Todo not found",
        });
    }
        // Send a response back to the client
        res.status(200).json({ message: "Todo deleted successfully", todo: deletedTodo });

    } catch (error) {
        // Handle any errors
        console.error("Error creating todo:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { deleteTodo};
