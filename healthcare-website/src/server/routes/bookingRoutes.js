import Booking from "../models/Booking.js";
import express from "express"

const router = express.Router();


// Create Bookings
router.post("/", async (req, res) => {
    try {
        const booking = await Booking.create(req.body)
        res.status(201).json(booking)
    }

    catch (err) {
        res.status(400).json({ message: err })
    }
})


// Get All Bookings
router.get("/", async (req, res) => {

    const bookings = await Booking.find();
    res.json(bookings)
})

export default router;
