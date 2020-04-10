import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {getUserProfileThunkCallback, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import withRedirect from "../../hoc/withAuthRedirectHoc";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        status: state.profilePage.status
    }
}

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 6722;
        this.props.getUserProfileThunkCallback(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
           <Profile profilePage={this.props.profilePage} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
        )
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfileThunkCallback, updateUserStatus, getUserStatus}),
    withRouter
)(ProfileContainer);