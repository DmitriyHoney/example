import React from 'react';
import s from './SmallAvatar.module.css';
import {NavLink} from "react-router-dom";
import defaultUser from '../../../assets/image/default-user.png';

let SmallAvatar = (props) => {
    let userUrl = `/profile/${props.id}`;
    return (
        <NavLink to={userUrl}>
            <div className={s.section}>
                <img src={props.img ? props.img : defaultUser} alt="avatar" className={s.avatar}/>
                <h3 className={s.name}>{props.name}</h3>
            </div>
        </NavLink>
    )
};

export default SmallAvatar;