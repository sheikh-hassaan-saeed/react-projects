import axios from "axios";
import { useEffect, useState } from "react";
import './Profile.css'
import person from '../../assets/images/dummy-pic.png'

function Profile() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const res = await axios.get("http://10.56.201.183:5000/api/bookings");
            setBookings(res.data);
        };
        fetchBookings();
    }, []);

    return (
        <>

            <h2 className="profile-h2">Medical Profile</h2>

            <div className="profile-card">

                {/* Personal Info */}
                <div id="personal-info" className="profile-section">
                    <h3>Personal Info</h3>
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Age:</strong> 32</p>
                    <p><strong>Email:</strong> johndoe@gmail.com</p>
                    <p><strong>Blood Group:</strong> O+</p>
                    <div className="data-img">
                        <img src={person} />
                    </div>
                </div>


                <div id="medical-history" className="profile-section">
                    <h3>Medical History</h3>
                    <p>No chronic illnesses recorded. Last check-up: Jan 2025.</p>
                </div>

                <div id="bookings" className="profile-section">
                    <h3>Your Bookings</h3>
                    <div className="profile-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th className="email-data">Email</th>
                                    <th>Test</th>
                                    <th>Date</th>
                                </tr>


                            </thead>
                            <tbody>
                                {bookings.map((b) => (
                                    <tr key={b._id}>
                                        <td>{b.name}</td>
                                        <td className="email-data">{b.email}</td>
                                        <td>{b.testName}</td>
                                        <td>{new Date(b.date).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Profile;
