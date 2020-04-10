import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={s.section}>
            <a href="#" className={s.logo}>Logotype</a>
            {props.resultCode === 0
                ? <NavLink to="/login" className={s.login}>Welcome {props.data.login}</NavLink>
                : <NavLink to="/login" className={s.login}>Зарегестрируйтесь</NavLink>
            }
        </header>
    )
}

export default Header;