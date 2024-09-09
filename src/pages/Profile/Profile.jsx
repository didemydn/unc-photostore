import React, { useEffect } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile({loggedIn}){
    const navigate = useNavigate();

    useEffect(() => {
        if(!loggedIn) {
            navigate("/login", { state: { from: "/profile" } });
        }
    }, [loggedIn, navigate]);

    return(
        <section className="profile-container py-5 text-center container">
            {loggedIn && (
                <div className="profile-card">
                <img
                    src="/user.png" 
                    alt="Profile"
                    className="profile-img"
                />
                <h2>UNCINC</h2>
                <p className="profile-title">photographer</p>
                <div className="profile-details">
                    <p><strong>Email:</strong> info@example.com</p>
                    <p><strong>Phone:</strong> 123 456 789</p>
                </div>
                <button className="btn btn-secondary">Edit Profile</button>
            </div>
            )}               
        </section>
    )
}

export default Profile;