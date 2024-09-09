import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard({loggedIn}){

    const navigate = useNavigate();

    return(
        <section className="py-5 text-center container dashboard">
            {loggedIn ? (
                <div>
                   <h1> Welcome to Dashboard</h1>
                   <p className="text-body-secondary">Heloooooo</p>
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