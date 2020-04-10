import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
import {Redirect} from "react-router-dom";
import withRedirect from "../../hoc/withAuthRedirectHoc";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

class MessagesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {
        return <Messages/>
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withRedirect
)(MessagesContainer);
