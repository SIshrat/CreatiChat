import React from "react";
import './Navbar.css'; 
import Button from "../Button";

const Navbar = () => {

    
    return(
        <div className="nav">
            <Button>  Home  </Button>
            <Button>Profile</Button>
            <Button> Social </Button>
            <Button>  FAQ  </Button>
            <Button>Contact</Button>
        </div>
    );
}

export default Navbar;