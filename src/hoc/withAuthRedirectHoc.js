import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

let withRedirect = (Component) => {
    class ComponentWithRedirect extends React.Component {
        render() {
            if (this.props.isAuth) return <Component {...this.props}/>
            else return <Redirect to={'/login'}/>
        }
    }

    return connect(mapStateToProps)(ComponentWithRedirect);
};

export default withRedirect;