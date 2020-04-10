import React from 'react';
import s from './OneUser.module.css';
import SmallAvatar from "../smallAvatar/SmallAvatar";

let OneUser = (props) => {
	return(
        <div className={s.section}>
            <SmallAvatar img={props.img} name={props.name} id={props.id}/>
            <p className={s.status}>
                {props.status ? props.status : 'no status'}
            </p>
            <div>
                {props.followed
                    ? <button
                        className="main-btn"
                        onClick={() => props.toggleFollow(props.id, props.followed)}
                        disabled={props.subscribeProcessUsers.some(elem => elem == props.id)}
                    >
                        Unfollow
                    </button>

                    : <button
                        className="main-btn"
                        onClick={() => props.toggleFollow(props.id, props.followed)}
                        disabled={props.subscribeProcessUsers.some(elem => elem == props.id)}
                    >
                        Follow
                    </button>
                }
            </div>
        </div>
	)
};

export default OneUser;