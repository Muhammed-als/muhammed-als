import React from "react";
import { Link, useLocation } from 'react-router-dom'; 
import "./Navbar.css";

function Navbar(){
    const location = useLocation();
    const isActive = (path:any) => {
        return location.pathname === path;
      };
    return (
        <nav> 
            <ul>
                <li><Link className={isActive('/')? 'active homepage':'homepage'} to="/">Muhammed Alsabban</Link></li>
                <div className="navigationLinks">
                    <li><Link className={isActive('/about') ? 'active' : ''} to="/about">About</Link></li>
                    <li><Link className={isActive('/projects') ? 'active' : ''} to="/projects">Projects</Link></li>
                    <li><Link className={isActive('/skills') ? 'active' : ''} to="/skills">Skills</Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;