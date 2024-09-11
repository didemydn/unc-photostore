import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard({loggedIn}){

    const navigate = useNavigate();

    const purchasedPhotos = [
        {
            src:"/home-photos/andrew-hawkes.jpg",
            alt:"andrew-hawkes",
        },
        {
            src:"/home-photos/antone-adi.jpg",
            alt:"antone-adi",
        },       
        {
            src: "/home-photos/harvey.jpg",
            alt: "harvey",
        }        
    ]

    return(
        <div className={`dashboard ${loggedIn ? "dashboard-background" : "default-background"}`}>
            {loggedIn ? (
                <div>
                   <h5> Welcome to your Dashboard</h5>
                   <p className="text-body-secondary">Here are the photos you've purchased</p>
                   <div className="card-container">
                    {purchasedPhotos.map((photo, index) => (
                        <div className="col" key={index}>
                            <div className="card mb-4">
                                <img src={photo.src} alt={photo.alt} className="card-img-top"/>
                            </div>
                        </div>
                    ))}                
                   </div>
                </div>
            ) : (
                <div className="">
                <div className="">
                    <h1 className="fw-light">Hello!</h1>
                    <p className="text-body-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis luctus libero, nec facilisis magna. Integer vitae mauris felis. In ac finibus mauris, vel aliquam risus. Suspendisse quis blandit quam, sit amet interdum eros. Praesent sodales orci id dui commodo rhoncus at vitae leo. Vivamus scelerisque augue et est rhoncus laoreet. Donec et consequat dolor. Sed ultricies non mi et mattis. Praesent facilisis aliquet dui vel accumsan.</p>
                    <p>
                        <button 
                        className="btn btn-secondary my-2"                         
                        onClick={() => navigate("/login", { state: { from: "/dashboard" } })}
                        aria-label="Login to access your dashboard"
                        >
                        Please login
                        </button>
                    </p>
                </div>
            </div>
            )
            }           
            
        </div>
    )
}

export default Dashboard;