import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();


// Create booking
router.post("/", async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all bookings
router.get("/", async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});

export default router;
