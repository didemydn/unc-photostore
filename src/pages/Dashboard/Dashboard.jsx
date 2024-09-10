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
        <section className="container dashboard">
            {loggedIn ? (
                <div>
                   <h5> Welcome to your Dashboard</h5>
                   <p className="text-body-secondary">Here are the photos you've purchased</p>
                   <div className="">
                    {purchasedPhotos.map((photo, index) => (
                        <div className="col md-6" key={index}>
                            <div className="card mb-4 box-shadow">
                                <img src={photo.src} alt={photo.alt} className="card-img-top"/>
                            </div>
                        </div>
                    ))}                
                   </div>
                </div>
            ) : (
                <div className="row py-lg-5">
                <div className="mx-auto">
                    <h1 className="fw-light">DASHBOARD</h1>
                    <p className="text-body-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis luctus libero, nec facilisis magna. Integer vitae mauris felis. In ac finibus mauris, vel aliquam risus. Suspendisse quis blandit quam, sit amet interdum eros. Praesent sodales orci id dui commodo rhoncus at vitae leo. Vivamus scelerisque augue et est rhoncus laoreet. Donec et consequat dolor. Sed ultricies non mi et mattis. Praesent facilisis aliquet dui vel accumsan.</p>
                    <p>
                        <button 
                        className="btn btn-secondary my-2"                         
                        onClick={() => navigate("/login", { state: { from: "/dashboard" } })}
                        >
                        Please login
                        </button>
                    </p>
                </div>
            </div>
            )
            }           
            
        </section>
    )
}

export default Dashboard;