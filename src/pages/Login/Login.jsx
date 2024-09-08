import React from "react";
import "./Login.css";

function Login(){
    return(
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className="form-control" htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter your email" required></input>
                </div>
                <div className="mb-3">
                    <label className="form-control" htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="enter your password" required></input>
                </div>
                <button type="submit" className="btn btn-secondary my-2">Login</button>
            </form>
        </div>
    )
}

export default Login;