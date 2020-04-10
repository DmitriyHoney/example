import React from 'react';
import s from './Pagination.module.css';

let Pagination = (props) => {

    let createPaginationBtns = (quantityBtns, currentPage) => {
        return quantityBtns.map(btn => {
            return (
                <span
                    key={btn}
                    className={currentPage === btn ? `${s.pagBtn_act} ${s.pagBtn}` : s.pagBtn}
                    onClick={() => props.changeCurrentPage(btn)}
                >
                    {btn}
                </span>
            )
        })
    };

	return(
		<div className={s.section}>
            <button onClick={() => props.paginationMove('prev')}>prev</button>
            <div className={s.paginationWrap}>
                {createPaginationBtns(props.quantityBtns, props.currentPage)}
            </div>

            <button onClick={() => props.paginationMove('next')}>next</button>
		</div>
	)
};

export default Pagination;