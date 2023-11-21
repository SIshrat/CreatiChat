import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; 
import Button from "../Button";

const Navbar = () => {
    
    return(
        <div className="nav">
            <Button><Link to="/home"> Home</Link></Button>
            <Button>Profile</Button>
            <Button> Social </Button>
            <Button>  FAQ  </Button>
            <Button>Contact</Button>
        </div>
    );
}

export default Navbar;