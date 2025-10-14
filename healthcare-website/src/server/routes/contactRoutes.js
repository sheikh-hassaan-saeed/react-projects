
import Contact from "../models/Contact.js";
import express from 'express'

const router = express.Router();


//  Create Contact
router.post("/", async (req, res) => {
    try {
        const contact = await Contact.create(req.body)
        res.status(201).json(Contact)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }

})

// Get All Contacts

router.get("/", async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts)
})

export default router;