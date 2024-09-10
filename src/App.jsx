import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Menu from './components/Menu/Menu';
import { useState } from 'react';
import Purchase from './pages/Purchase/Purchase';
import PageTransition from './components/PageTransition/PageTransition';

function App() {

  const [loggedIn, setLoggedIn] = useState(false); //login state for menu item and dashboard after logged in

  return (
    <div className="App">      
      <Router>
        <Menu loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Menu>
        <PageTransition>   
          <Routes>
            <Route path="/" element={<Home loggedIn={loggedIn}></Home>}/>
            <Route path="/home" element={<Home loggedIn={loggedIn}></Home>}/>
            <Route path="/dashboard" element={<Dashboard loggedIn={loggedIn}></Dashboard>}/>
            <Route path="/profile" element={<Profile loggedIn={loggedIn}></Profile>}/>
            <Route path="/purchase" element={<Purchase loggedIn={loggedIn}></Purchase>}/>
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn}></Login>}/>
          </Routes>
        </PageTransition> 
      </Router>
    </div>
  );
}

export default App;
