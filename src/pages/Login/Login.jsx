import React, { useState, useEffect } from "react";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";

function Login({setLoggedIn, loggedIn}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate=useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (loggedIn) {
          const from = location.state?.from || "/profile";
          navigate(from); // Redirect if already logged in
        }
      }, [loggedIn, navigate, location.state]);

    const handleLogin = (e) => {
        e.preventDefault();

        //login informations
        const givenEmail = "uncinc";
        const givenPassword = "letmein";

        if (email === givenEmail && password === givenPassword) {
            setLoggedIn(true);
            setError("");
            const from = location.state?.from || "/profile";
            setTimeout(() => {
                navigate(from); // Navigate after login
              }, 100); // Optional slight delay to allow state update
            } else {
            setError("Wrong email or password. Please try again.");
        }
    }    
    
    if (loggedIn) return null;
    
    return(
        <div className="container login">
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-control" htmlFor="email">Email</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="email" 
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
                    id="password" 
                    placeholder="enter your password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <button type="submit" className="btn btn-secondary my-2">Login</button>
            </form>
        </div>
    )
}

export default Login;