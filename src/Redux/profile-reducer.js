import {userProfileApi} from "../api";

let initialState = {
    photos: {
        large: null,
        small: null
    },
    status: '',
    isUser: false
};

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const USER_READY = 'USER_READY';
const SET_STATUS = 'SET_STATUS';

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                ...action.stateFromApi
            }
        case USER_READY:
            return {
                ...state,
                isUser: action.bool
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return {...state}
    }
};

//ActionCreator
const setUserProfileStateAC = (stateFromApi) => ({type: SET_USER_PROFILE, stateFromApi});
const userReadyAC = (bool) => ({type: USER_READY, bool});
const setStatus = (status) => ({type: SET_STATUS, status});
//Thunk
export const getUserStatus = (userId) => {


    return (dispatch) => {
        userProfileApi.getUserStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })

    }
};

export const updateUserStatus = (newStatus) => {
    return (dispatch) => {
        userProfileApi.updateUserStatus(newStatus)
            .then(response => {

                if(response.data.resultCode === 0) {
                    dispatch(setStatus(newStatus));
                }
            })

    }
};
export const getUserProfileThunkCallback = (userId) => {
    return (dispatch) => {
        dispatch(userReadyAC(false));
        userProfileApi.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfileStateAC(response.data));
                dispatch(userReadyAC(true));
            })
    }
}


export default profileReducer;