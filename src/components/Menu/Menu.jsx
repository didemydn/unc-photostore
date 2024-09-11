import React from "react";
import "./Menu.css";
import { useNavigate, Link } from "react-router-dom";

function Menu({loggedIn, setLoggedIn}){
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/");
  }

  const handleProfile = () => {
    if (loggedIn) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  }

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">PhoSto</Link>
          <button className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard" >Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={loggedIn ? "/profile" : "/login"} aria-label={loggedIn ? "Go to Profile" : "Login to view Profile"} onClick={handleProfile}>My Profile</Link>
              </li>
              {loggedIn && (
                
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout} aria-label="Logout">Logout</button>
                </li>
              )}               
            </ul>            
          </div>
        </div>
      </nav>
    )
}

export default Menu;