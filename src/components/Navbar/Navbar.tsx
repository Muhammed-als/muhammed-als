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
                <li><Link className={isActive('/muhammed-als/')? 'active homepage':'homepage'} to="/muhammed-als/">Muhammed Alsabban</Link></li>
                <div className="navigationLinks">
                    <li><Link className={isActive('/muhammed-als/about') ? 'active' : ''} to="/muhammed-als/about">About</Link></li>
                    <li><Link className={isActive('/muhammed-als/skills') ? 'active' : ''} to="/muhammed-als/skills">Skills</Link></li>
                    <li><Link className={isActive('/muhammed-als/projects') ? 'active' : ''} to="/muhammed-als/projects">Projects</Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;