import React, { useState } from "react";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";

function Login({setLoggedIn}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate=useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();

        //login informations
        const givenEmail = "uncinc";
        const givenPassword = "letmein";

        if (email === givenEmail && password === givenPassword) {
            setLoggedIn(true);
            setError("");
            const from = location.state?.from || "/profile";
            navigate(from);
        } else {
            setError("Wrong email or password. Please try again.");
        }
    }    
    
    return(
        <div className="container">
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-control" htmlFor="email">Email</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="enter your email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-control" htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="enter your password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-secondary my-2">Login</button>
            </form>
        </div>
    )
}

export default Login;