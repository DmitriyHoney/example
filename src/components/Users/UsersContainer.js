import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    getUsersThunkCallback,
    paginationMoveAC,
    toggleFollowThunkCallback
} from "../../Redux/users-reducer";
import Login from "../Login/Login";
import {Redirect} from "react-router-dom";
import withRedirect from "../../hoc/withAuthRedirectHoc";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        isAuth: state.auth.isAuth
    }
};


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCallback(this.props.usersPage.usersOnPage, this.props.usersPage.currentPage);
    } //Запрос на сервер

    changeCurrentPage = (newPage) => {
        this.props.getUsersThunkCallback(this.props.usersPage.usersOnPage, newPage);
    }

    paginationMove = (vector) => {
        this.props.paginationMoveAC(vector)
    }

    toggleFollow = (userId, followed) => {
        this.props.toggleFollowThunkCallback(userId, followed);
    }

    render() {
        let usersPage = this.props.usersPage;

        return (
            <div>
                <Users
                    items={usersPage.items} //Массив пользователей
                    quantityBtns={usersPage.pagination.currentBtn}
                    changeCurrentPage={this.changeCurrentPage}
                    paginationMove={this.paginationMove}
                    currentPage={usersPage.currentPage}
                    toggleFollow={this.toggleFollow}
                    subscribeProcessUsers={usersPage.subscribeProcessUsers}
                    preloaderState={usersPage.preloaderState}
                />
            </div>

        );
    }
}

export default compose(
    connect(mapStateToProps, {getUsersThunkCallback, paginationMoveAC, toggleFollowThunkCallback}),
    withRedirect
)(UsersContainer);

