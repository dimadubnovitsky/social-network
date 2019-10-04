import {profileAPI} from "../api/api";

const ADD_POST = 'MA/PROFILE_PAGE/ADD_POST';
const SET_USER_PROFILE = 'MA/PROFILE_PAGE/SET_USER_PROFILE';
const SET_USER_STATUS = 'MA/PROFILE_PAGE/SET_USER_STATUS';

let initialState = {
    posts: [
        {
            id: 1,
            text: 'Hi, how are you?',
            likes: 20,
            imageUrl: "https://yt3.ggpht.com/a/AGF-l7-mAPvYhyniYSdDCWN6H1GPtyKCDyMHnWI1KA=s800-mo-c-c0xffffffff-rj-k-no"
        },
        {
            id: 2,
            text: "It's my first post",
            likes: 10,
            imageUrl: "https://avatarfiles.alphacoders.com/855/85557.png"
        }
    ],
    profile: null,
    status: ""
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case    ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 3, text: action.newPostText, likes: 0}],
            }
        }
        case    SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case    SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostAC = (newPostText) => {
    return {type: ADD_POST, newPostText: newPostText}
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status}
}

export const getUserProfileThunk = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export const getUserStatusThunk = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setUserStatus(data));
    });
}

export const updateUserStatusThunk = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
}

export default profilePageReducer;