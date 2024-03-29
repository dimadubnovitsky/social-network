import React from 'react';
import {addPostAC} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//     let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostAC());
//     }
//
//     let onPostChange = (postText) => {
//         props.store.dispatch(updateNewPostTextAC(postText));
//     }
//
//     return (
//         <MyPosts onPostChange={onPostChange} addPost={addPost} newPostText={state.profilePage.newPostText}
//                  posts={state.profilePage.posts}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostAC(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;