import React from 'react';
import s from './Profile.module.css';
import ProfileCard from "../common/ProfileCard/ProfileCard";
import Preloader from "../common/Preloader/Preloader";

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


let Profile = (props) => {
	if (props.profilePage.isUser) {
		return(
			<div>
				<ProfileCard profilePage={props.profilePage} status={props.status} updateStatus={props.updateStatus}/>
			</div>
		)
	} else {
		return(
			<Preloader/>
		)
	}

};

export default Profile;