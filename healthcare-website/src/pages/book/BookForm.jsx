import React, { useState } from 'react'
import './BookForm.css'
import Packages from '../packages/Packages'
import bloodIcon from '../../assets/images/blood icon.png'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const BookForm = () => {

    const location = useLocation();
    const { testName } = location.state || {};
    const [formdata, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        testName: testName || '',
    });

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5000/api/bookings", formdata);
        alert("Booking confirmed!");

    }
    return (
        <>
            <h2 className='test-heading'>Booking for: {testName || "No test selected"}</h2>

            <div className="book-form-container">


                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter your name" value={formdata.name} onChange={handleChange} />

                    <label>Phone</label>
                    <input type="tel" name="phone" placeholder="+971-XXXXXXX" value={formdata.phone} onChange={handleChange} />

                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email" value={formdata.email} onChange={handleChange} />

                    <label>Selected Test</label>
                    <input type="text" className='selected-test' name="testName" value={testName || ""} readOnly />

                    <label>Preferred Date</label>
                    <input type="date" name="date" value={formdata.date} onChange={handleChange} />

                    <button type="submit">Confirm Booking</button>
                </form>

                <div className="form-image">
                    <img src={bloodIcon} />
                </div>

            </div>

        </>
    )
}

export default BookForm;