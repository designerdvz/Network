import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";



function Nav() {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/Profile">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/Users">Users</NavLink>
            </div>
            <div>
                <NavLink to="/Dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink to="/Friends">Friends</NavLink>
            </div>
            <div>
                <NavLink to="/News">News</NavLink>
            </div>
            <div>
                <NavLink to="/Settings">Settings</NavLink>
            </div>
            <div>
                <NavLink to="/Music">Music</NavLink>
            </div>

        </nav>
    )
}

export default Nav

