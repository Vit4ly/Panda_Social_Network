import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom";



const NavBar = () => {
    return <nav className={'nav'}>
        <div className={'nav_item'}>
            <NavLink to={'/Profile'}>Profile</NavLink>
        </div>
        <div className={'nav_item'}>
            <NavLink to={'/Messages'}>Message</NavLink>
        </div>
        <div className={'nav_item'}>
            <NavLink to={'/News'}>News</NavLink>
        </div>
        <div className={'nav_item'}>
            <NavLink to={'/Music'}>Music</NavLink>
        </div>
        <div className={'nav_item'}>
            <NavLink to={'/Settings'}>Settings</NavLink>
        </div>
    </nav>
};

export default NavBar;