import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return <nav className={'nav'}>
        <div className={'nav_item'}>
            <a href={'/Profile'}>Profile</a>
        </div>
        <div className={'nav_item'}>
            <a href={'/Messages'}>Message</a>
        </div>
        <div className={'nav_item'}>
            <a href={''}>News</a>
        </div>
        <div className={'nav_item'}>
            <a href={''}>Music</a>
        </div>
        <div className={'nav_item'}>
            <a href={''}>Settings</a>
        </div>
    </nav>
};

export default NavBar;