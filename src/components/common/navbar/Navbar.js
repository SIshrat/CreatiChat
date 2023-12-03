import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; 
import Button from "../Button";

const Navbar = (props) => {
    
    return(
        <div className="nav">
            {props.logState ? <>
                <Link to="/home" className="button">Home</Link>
                <Button>Profile</Button>
                <Button>Social</Button>
                <Button>FAQ</Button>
                <Button>Contact</Button>
                </>
                :<>
                <Link to="/" className="button">Home</Link>
                <Button>FAQ</Button>
                <Button>Contact</Button></>}                
        </div>
    );
}

export default Navbar;