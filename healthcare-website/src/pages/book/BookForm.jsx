import React from 'react'
import './BookForm.css'
import Packages from '../packages/Packages'
import bloodIcon from '../../assets/images/blood icon.png'
import { useLocation } from 'react-router-dom'
const BookForm = () => {

    const location = useLocation();
    const { testName } = location.state || {};
    return (
        <>
            <h2 className='test-heading'>Booking for: {testName || "No test selected"}</h2>

            <div className="book-form-container">


                <form>
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" required />

                    <label>Phone</label>
                    <input type="tel" placeholder="+971-XXXXXXX" required />

                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />

                    <label>Selected Test</label>
                    <input type="text" className='selected-test' value={testName || ""} readOnly />

                    <label>Preferred Date</label>
                    <input type="date" required />

                    <button type="submit">Confirm Booking</button>
                </form>

                <div className="form-image">
                    <img src={bloodIcon} />
                </div>

            </div>
        </>
    )
}

export default BookForm