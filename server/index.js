/* eslint-disable no-undef */
import express from "express";
import * as dotenv from "dotenv";
import cors from 'cors'
import mongoose from 'mongoose'

import {router} from "./routes/index.js";

dotenv.config({path: '../.env'});

try {

    const connectToDB = async () => mongoose.connect(process.env.MONGODB_URI);

    await connectToDB();
} catch (error) {
    console.log("Error occurred while connecting to the database. Did you forget to set your MONGODB_URI in the .env file?");
    console.error(error);
    process.exit();
}

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200);
    res.send("Server running...");
});

app.use('/api',
    [
        router,
    ])

app.listen(process.env.EXPRESS_PORT, (error) => {
    if (error) {
        console.log("Error occurred, server can't start", error);
    }
    console.log(`Server is Successfully Running on Port ${process.env.EXPRESS_PORT}`);
});