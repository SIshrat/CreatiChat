import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; 
import Button from "../Button";

const Navbar = (props) => {
    
    return(
        <div className="nav">
            <Link to="/home" className="button">Home</Link>
            {props.logState ? <>
                <Button>Profile</Button>
                <Button>Social</Button>
                <Button>FAQ</Button>
                <Button>Contact</Button> </>: null}
        </div>
    );
}

export default Navbar;