import {usersApi} from "../api";

const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT = 'CHANGE_CURRENT';
const PAGINATION_MOVE = 'PAGINATION_MOVE';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const PROCESS_FOLLOWING = 'PROCESS_FOLLOWING';
const PRELOADER_STATE = 'PRELOADER_STATE';


let initialState = {
    items: [
        {
            name: "shota",
            id: 6969,
            uniqueUrlName: null,
            photos: {
                small: 'https://www.romanticcollection.ru/sites/default/files/rel524.jpg',
                large: null
            },
            status: 'I`m taste',
            followed: false
        }
    ],
    totalCount: 2971,
    error: null,
    usersOnPage: 30,
    currentPage: 1,
    subscribeProcessUsers: [],
    preloaderState: false,
    getLastBtn() {
        return Math.ceil(this.totalCount / this.usersOnPage);
    },
    pagination: {
        firstBtn: 1,
        step: 1,
        currentBtn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        last: 425
    }
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                ...action.stateFromAPI
            }
        case CHANGE_CURRENT:
            return {
                ...state,
                currentPage: action.newPage
            }
        case PAGINATION_MOVE:
            let movePagination = (arr, vector, last) => {
                let result;
                if (vector === 'next') {
                    let nextBtn = arr[arr.length - 1] + 1;
                    if (nextBtn > last) {
                        return arr;
                    } else {
                        result = arr.slice(1);
                        result.push(nextBtn);
                    }
                } else {
                    let prevBtn = arr[0] - 1;
                    if (prevBtn <= 0) {
                        return arr;
                    } else {
                        result = arr.slice(0, -1);
                        result.unshift(prevBtn);
                    }
                }
                return result;
            };

            let res = movePagination(state.pagination.currentBtn, action.vector, state.getLastBtn());
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentBtn: res
                }
            }
        case TOGGLE_FOLLOW:
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return {...u}
                })
            }
        case PROCESS_FOLLOWING:
            return {
                ...state,
                subscribeProcessUsers: action.bool
                    ? [...state.subscribeProcessUsers, action.userId]
                    : state.subscribeProcessUsers.filter(user => action.userId != user)
                }
        case PRELOADER_STATE:
            return {
                ...state,
                preloaderState: action.bool
            }
        default:
            return {...state}
    }
}

//ActionCreator
const setUsersAC = (stateFromAPI) => ({type: SET_USERS, stateFromAPI});
const changeCurrentPage = (newPage) => ({type: CHANGE_CURRENT, newPage});
const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId});
const userProcessFollowingAC = (userId, bool) => ({type: PROCESS_FOLLOWING, userId, bool});
const changePreloaderState = (bool) => ({type: PRELOADER_STATE, bool});
export const paginationMoveAC = (vector) => ({type: PAGINATION_MOVE, vector});

//Thunk
export const getUsersThunkCallback = (usersOnPage, currentPage) => {
    return (dispatch) => {
        dispatch(changePreloaderState(true));
        dispatch(changeCurrentPage(currentPage));
        usersApi.getUsers(usersOnPage, currentPage)
            .then(response => {
                dispatch(setUsersAC(response.data));
                dispatch(changePreloaderState(false));
            });
    }
};
export const toggleFollowThunkCallback = (userId, followed) => {
    return (dispatch) => {
        if (followed) {
            dispatch(userProcessFollowingAC(userId, true));
            usersApi.unFollowUser(userId)
                .then(response => {
                        if (response.data.resultCode === 0) {
                            dispatch(toggleFollowAC(userId))
                            dispatch(userProcessFollowingAC(userId, false));
                        }
                    }
                )
        } else {
            dispatch(userProcessFollowingAC(userId, true));
            usersApi.followUser(userId)
                .then(response => {
                        if (response.data.resultCode === 0) {
                            dispatch(toggleFollowAC(userId))
                            dispatch(userProcessFollowingAC(userId, false));
                        }
                    }
                )
        }
    }
}

export default usersReducer;