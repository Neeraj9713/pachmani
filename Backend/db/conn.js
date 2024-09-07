import mongoose from "mongoose";

const URI= process.env.MONGO_DB_URI;

const connectdb = async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection Successful");
    }catch(e){
        console.log("database connection failed");
        process.exit(0);
    }
}

export default connectdb;