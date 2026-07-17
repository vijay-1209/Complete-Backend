import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // console.log(connectionInstance);
        
        console.log(`MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB connection error", error);
        throw error;
    }
};

export default connectDB