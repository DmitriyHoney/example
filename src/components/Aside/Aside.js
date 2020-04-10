import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Aside.module.css';

let Aside = (props) => {
	return(
		<aside className={s.section}>
            <ul>
                <li className={s.item}>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users">
                        Users
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/messages">
                        Messages
                    </NavLink>
                </li>
            </ul>
		</aside>
	)
};

export default Aside;