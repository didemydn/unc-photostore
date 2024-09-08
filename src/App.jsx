import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from './pages/Dashboard/Dashboard';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">  
    <Menu></Menu>    
      <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/login" element={<Login></Login>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
