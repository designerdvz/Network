import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
<header className={s.header}>
    <div className={s.loginBlock}>
        {props.isAuth ? props.login :
            <NavLink to={'/login'} className={s.loginNavlink}>Login</NavLink>
        }
    </div>
    <img src='https://images.unsplash.com/photo-1655761940444-b666fd26f685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />

</header>)
}

export default Header

