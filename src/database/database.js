import mongoose from "mongoose";

const Database = async()=>{
    try {
        const connects = await mongoose.connect(`${process.env.MONGO_URI}/Foodify`);
        console.log("Database connected ",connects.connection.host);
    } catch (error) {
        console.log("Database connection failed",error);
    }
}
export default Database
