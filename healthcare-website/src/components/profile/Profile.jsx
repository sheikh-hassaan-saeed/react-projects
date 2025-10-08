import React from "react";
import "./Profile.css";
import profilePic from "../../assets/images/person.png"; // replace with your image path

const Profile = () => {
    const user = {
        name: "Hassaan Saeed",
        email: "hassaan@example.com",
        phone: "+92 300 1234567",
        joinDate: "June 2024",
    };

    const testHistory = [
        { id: 1, testName: "Blood Test", date: "12 Sep 2025", price: "$40", status: "completed" },
        { id: 2, testName: "X-Ray", date: "03 Oct 2025", price: "$70", status: "pending" },
        { id: 3, testName: "COVID PCR", date: "20 Sep 2025", price: "$25", status: "canceled" },
    ];

    return (
        <div className="profile-container">

            <div className="profile-info">
                <img src={profilePic} alt="User" className="profile-img" />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <small>Member since {user.joinDate}</small>
            </div>


            <div className="profile-details">
                <h3 className="test-main">Your Tests</h3>
                <table className="test-table">
                    <thead>
                        <tr>
                            <th>Test Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Test Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testHistory.map((test) => (
                            <tr key={test.id}>
                                <td>{test.testName}</td>
                                <td>{test.date}</td>
                                <td>{test.price}</td>
                                <td>{test.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="summary">
                    <p>Total Tests: {testHistory.length}</p>
                    <p>
                        Total Spent: $
                        {testHistory.reduce((sum, t) => sum + parseInt(t.price.slice(1)), 0)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
