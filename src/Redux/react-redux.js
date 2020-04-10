import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import loginReducer from "./login-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    usersPage: usersReducer,
    auth: loginReducer,
    profilePage: profileReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;