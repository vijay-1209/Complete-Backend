import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path:"./env"
})

const port = process.env.PORT || 5000

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`server is running at port: ${port}`)
    })
})
.catch((error) => {
    console.log("MONGODB connection FAILED !!", error);
    process.exit(1)
})

































// import express from 'express';

// const app = express();
/*
;(async () => { //iffe function -> which is run instantly after the function
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" (error) => {
            console.log("ERROR: ", error);
            throw error;
        })
    } catch (error) {
        console.log("ERROR: ", error);
        throw error;
    }
})()
*/