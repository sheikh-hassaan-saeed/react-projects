import express from "express"
import cors from "cors"
import { config } from "dotenv"
import dotenv from "dotenv"
import mongoose, { connect } from "mongoose";


dotenv.config();
const app = express();

app.use(cors())
app.use(express.json())

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => ({ message: err }))


// Fetch Route
import bookingRoutes from "./routes/bookingRoutes.js"
app.use("/api/bookings", bookingRoutes)

app.listen(5000, () => console.log("Server Running on port 5000"))




