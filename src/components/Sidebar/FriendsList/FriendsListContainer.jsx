import React from 'react';
import FriendsList from "./FriendsList";
import {connect} from "react-redux";

// const FriendsListContainer = (props) => {
//     let state = props.store.getState();
//
//     return (
//         <FriendsList friends={state.sidebar.friends}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

const FriendsListContainer = connect(mapStateToProps)(FriendsList);

export default FriendsListContainer;