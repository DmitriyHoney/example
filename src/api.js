import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3c081723-e3bb-4cf1-89b4-50163103d1c8"
    }
});


export const usersApi = {
    getUsers(usersOnPage = 5, currentPage = 1) {
        return instance.get(`users?count=${usersOnPage}&page=${currentPage}`)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },

};


export const loginApi = {
    getLoginData() {
        return instance.get('auth/me')
    }
};


export const userProfileApi = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateUserStatus(newStatus) {
        return instance.put(`profile/status`, {status: newStatus});
    }

};