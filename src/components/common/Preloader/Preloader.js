import React from 'react';
import s from './Preloader.module.css';
import preloaderImg from '../../../assets/image/preloader.svg';

let Preloader = (props) => {
	return(
		<div>
            <img src={preloaderImg} alt="preloader"/>
		</div>
	)
};

export default Preloader;