import React from "react";
import "./Dashboard.css";

function Dashboard(){
    return(
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">DASHBOARD</h1>
                    <p className="lead text-body-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis luctus libero, nec facilisis magna. Integer vitae mauris felis. In ac finibus mauris, vel aliquam risus. Suspendisse quis blandit quam, sit amet interdum eros. Praesent sodales orci id dui commodo rhoncus at vitae leo. Vivamus scelerisque augue et est rhoncus laoreet. Donec et consequat dolor. Sed ultricies non mi et mattis. Praesent facilisis aliquet dui vel accumsan.</p>
                    <p>
                        <a className="btn btn-secondary my-2" href="/login">Please login</a>
                    </p>
                </div>
            </div>
            
        </section>
    )
}

export default Dashboard;