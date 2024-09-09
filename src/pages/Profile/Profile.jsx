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
        <section className="py-5 text-center container">
            {loggedIn && (
                <h1>Hello, UNCINC! Welcome to PHOSTO</h1>
            )}               
        </section>
    )
}

export default Profile;