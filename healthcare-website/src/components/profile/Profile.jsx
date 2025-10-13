import axios from "axios";
import { useEffect, useState } from "react";
function Profile() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const res = await axios.get("http://localhost:5000/api/bookings");
            setBookings(res.data);
        };
        fetchBookings();
    }, []);

    return (
        <div className="profile-container">
            <h2>Your Bookings</h2>
            <table>
                <thead>
                    <tr><th>Name</th><th>Email</th><th>Test</th><th>Date</th></tr>
                </thead>
                <tbody>
                    {bookings.map((b) => (
                        <tr key={b._id}>
                            <td>{b.name}</td>
                            <td>{b.email}</td>
                            <td>{b.testType}</td>
                            <td>{new Date(b.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Profile;
