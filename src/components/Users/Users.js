import React from 'react';
import s from './Users.module.css';
import OneUser from "../common/OneUser/OneUser";
import Pagination from "../common/Pagination/Pagination";
import Preloader from "../common/Preloader/Preloader";


let Users = (props) => {
	let userList = props.items.map(user => {
		let {name, id, photos, followed, status} = user;
		return(
			<OneUser
				key={id}
				id={id}
				img={photos.small}
				name={name}
				status={status}
				followed={followed}
				toggleFollow={props.toggleFollow}
				subscribeProcessUsers={props.subscribeProcessUsers}
			/>

		)
	});

	return(
		<div>
			<Pagination
				changeCurrentPage={props.changeCurrentPage}
				quantityBtns={props.quantityBtns}
				paginationMove={props.paginationMove}
				currentPage={props.currentPage}
			/>
			{props.preloaderState ? <Preloader/> : userList}
		</div>
	)
};

export default Users;