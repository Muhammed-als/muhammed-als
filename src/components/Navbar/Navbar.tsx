import React from "react";
import { Link, useLocation } from 'react-router-dom'; 
import "./Navbar.css";

function Navbar(){
    const location = useLocation();
    const isActive = (path:any) => {
        const currentPath = window.location.pathname;
        if (path instanceof RegExp) {
            return path.test(currentPath);
        }
        return currentPath === path;
      };
    return (
        <nav> 
            <ul>
                <li><Link className={isActive('/muhammed-als/')? 'active homepage':'homepage'} to="/muhammed-als/">Muhammed Alsabban</Link></li>
                <div className="navigationLinks">
                    <li><Link className={isActive('/muhammed-als/about') ? 'active' : ''} to="/muhammed-als/about">About</Link></li>
                    <li><Link className={isActive('/muhammed-als/skills') || isActive(new RegExp('/muhammed-als/skills/[0-9]+/[a-zA-ZÆØÅæøå]+')) ? 'active' : ''} to="/muhammed-als/skills">Skills</Link></li>
                    <li><Link className={isActive('/muhammed-als/projects') || isActive(new RegExp('/muhammed-als/projects/[0-9]+/[a-zA-ZÆØÅæøå]+')) ? 'active' : ''} to="/muhammed-als/projects">Projects</Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;