import mongoose from "mongoose"

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/todo-app')
    console.log('DB connected')
}