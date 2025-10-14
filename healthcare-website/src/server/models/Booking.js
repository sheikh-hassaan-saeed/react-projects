import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    testName: String,
    Date: String
})


export default mongoose.model("Booking", bookingSchema)