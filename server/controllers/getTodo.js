const Todo=require("../models/todo.model")

const getTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const getTodo = await Todo.findById(id);
        
        // Check if the todo was found and updated
       if (!getTodo) {
        return res.status(404).json({
            success: false,
            message: "Todo not found",
        });
    }
        // Send a response back to the client
        res.status(200).json({ message: "Todo getdata successfully", todo:getTodo });

    } catch (error) {
        // Handle any errors
        console.error("Error creating todo:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getTodo};
