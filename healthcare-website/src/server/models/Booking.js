import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: String,
    testType: String,
    date: Date,
    email: String
});

export default mongoose.model("Booking", bookingSchema);
