//dependencies
import express from "express";
import dotenv from "dotenv";

//internal modules
import connectMongo from "./config/connectMongo.js";

// server initialization
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json())

// Routes

// Database connection and start server
app.listen(PORT, ()=> {
    connectMongo()
    console.log(`server running on port ${PORT}`)
})
