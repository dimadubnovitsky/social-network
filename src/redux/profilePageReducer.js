import {profileAPI} from "../api/api";

const ADD_POST = 'MA/PROFILE_PAGE/ADD_POST';
const UPDATE_NEW_POST_TEXT = 'MA/PROFILE_PAGE/UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'MA/PROFILE_PAGE/SET_USER_PROFILE';

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
    newPostText: '',
    profile: null
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case    UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case    ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 3, text: state.newPostText, likes: 0}],
                newPostText: ''
            }
        }
        case    SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextAC = (postText) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: postText}
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profilePageReducer;