//Libraries
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//Stylesheets
import './App.css';

//Components
import Aside from "./components/Aside/Aside";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import MessagesContainer from "./components/Messages/MessagesContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <Aside/>
                <div className="content">
                    <Route path='/login' render={() => <Login />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/messages' render={() => <MessagesContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
