/* eslint-disable no-undef */
import express from "express";
import * as dotenv from "dotenv";
import cors from 'cors'
import mongoose from 'mongoose'

import { router } from "./routes/index.js";

dotenv.config();

// const connectToDB = async () => mongoose.connect(process.env.MONGODB_URI);

// await connectToDB();

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