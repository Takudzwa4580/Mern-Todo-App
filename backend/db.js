const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://takudzwa4580:hMq9Lpm8Pc4%23_%24V@merntodo.gz1q4.mongodb.net/todos")
const todoSchema= mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo= mongoose.model("todos",todoSchema);
module.exports={
    todo:todo
}