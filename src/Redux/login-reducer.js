
/*
Success
{
    data: {
        id: 6722,
        login: "WhiteHoney",
        email: "vanove2013@yandex.ru"
    },
    messages: [ ],
    resultCode: 0
}

Fail
{
    data:{},
    messages:["You are not authorized"],
    resultCode:1
}

*/

import {loginApi} from "../api";
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
const SET_AUTH = 'SET_AUTH';

let initialState = {
    data: {},
    messages: ["You are not authorized"],
    resultCode: 1,
    isAuth: false
};


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.stateApi
            }
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.bool
            }
        default:
            return {...state}
    }
};

//ActionCreator
const setLoginDataAC = (stateApi) => ({type: SET_LOGIN_DATA, stateApi});
const setAuthStateAC = (bool) => ({type: SET_AUTH, bool});
//Thunk
export const getLoginDataThunkCallback = () => {
    return (dispatch) => {
        loginApi.getLoginData()
            .then(response => {
                response.data.resultCode === 0
                    ? dispatch(setAuthStateAC(true))
                    : dispatch(setAuthStateAC(false));
                dispatch(setLoginDataAC(response.data));
            })
    }
}

export default loginReducer;