import mongoose, { mongo } from "mongoose";

const connectDB = async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongoDB connected ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error in MongoDB connection : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;