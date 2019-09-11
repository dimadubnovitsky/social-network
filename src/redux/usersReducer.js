import {followAPI, userAPI} from "../api/api";

const FOLLOW = 'MA/USERS_PAGE/FOLLOW';
const UNFOLLOW = 'MA/USERS_PAGE/UNFOLLOW';
const SET_USERS = 'MA/USERS_PAGE/SET_USERS';
const SET_CURRENT_PAGE = 'MA/USERS_PAGE/CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'MA/USERS_PAGE/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'MA/USERS_PAGE/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'MA/USERS_PAGE/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: false,
        //     fullName: 'Dima',
        //     status: 'wow',
        //     location: {city: 'Minsk', country: 'Belarus'},
        //     photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     fullName: 'Valera',
        //     status: 'yeah',
        //     location: {city: 'Kiev', country: 'Ukraine'},
        //     photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'
        // },
        // {
        //     id: 3,
        //     followed: false,
        //     fullName: 'Zhenya',
        //     status: 'zbs',
        //     location: {city: 'Moscow', country: 'Russia'},
        //     photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'
        // }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {type: FOLLOW, userId}
}

export const unfollow = (userId) => {
    return {type: UNFOLLOW, userId}
}

export const setUsers = (users) => {
    return {type: SET_USERS, users}
}

export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export const setTotalUsersCount = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
}


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        followAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        followAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}

export default usersReducer;