//dependencies
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//internal modules
import connectMongo from "./config/connectMongo.js";
import authRoutes from "./routes/authRoutes.js"
import blogRoutes from "./routes/blogRoutes.js"
// server initialization
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/blog', blogRoutes)

// Database connection and start server
app.listen(PORT, ()=> {
    connectMongo()
    console.log(`server running on port ${PORT}`)
})
