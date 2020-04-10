import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getLoginDataThunkCallback} from "../../Redux/login-reducer";

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getLoginDataThunkCallback();
    }


    render() {
        return (
            <Header {...this.props.auth} />
        )
    }
}

export default connect(mapStateToProps, {getLoginDataThunkCallback})(HeaderContainer);