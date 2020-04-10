import React from 'react';
import s from './ProfileCard.module.css';
import defaultUserLarge from '../../../assets/image/default-user-large.jpg';
import ProfileStatus from "../ProifileStatus/ProfileStatus";

/*
	aboutMe: null,
    contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null
    },
	lookingForAJob: false,
	lookingForAJobDescription: null,
	fullName: "_disconnect_ed_",
	userId: 7014,
	photos: {
        small: null,
        large: null
    }

 */

let ProfileCard = (props) => {

    let getSocial = (objSocial) => {
        let result = [];
        let i = 0;
        for (let key in objSocial) {
            i++;
            if (objSocial[key]) {
                result.push(
                    <li key={i}>
                        <span>{key}: </span>
                        <a href="#">{objSocial[key]}</a>
                    </li>
                )
            } else {
                i++;
                result.push(
                    <li key={i}>
                        <span>{key}: </span>
                        <a href="#">Нет ссылки, не поставил, забыл...</a>
                    </li>
                )
            }
        }
        return result;
    }


    let {aboutMe, lookingForAJob, lookingForAJobDescription, fullName, photos, contacts} = props.profilePage;
	return(
		<div className={s.userProfileCard}>
            <div className={s.userWrap}>
                <img src={props.profilePage.photos.large ? props.profilePage.photos.large : defaultUserLarge} alt="avatar" className={s.userAvatar}/>
                <div className={s.userInfo}>
                    <h3>
                        {fullName}
                    </h3>
                    <p>
                        Job: {lookingForAJob ? 'Работаю' : 'Безработный'}
                    </p>
                </div>
                <div className={s.userAbout}>
                    <h4>About me</h4>
                    <p>
                        {aboutMe ? aboutMe : 'Пользователь не соизволил заявить о себе'}
                    </p>
                </div>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.userSocial}>
                <ul>
                    {getSocial(props.profilePage.contacts)}
                </ul>
            </div>
		</div>
	)
};

export default ProfileCard;