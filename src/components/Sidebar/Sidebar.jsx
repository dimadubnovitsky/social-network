import React from 'react';
import PropTypes from 'prop-types';
import classes from './Sidebar.module.css';
import Navbar from "./Navbar/Navbar";
import FriendsListContainer from "./FriendsList/FriendsListContainer";

const Sidebar = (props) => (
    <div className={classes.side}>
        <Navbar/>
        <FriendsListContainer store={props.store}/>
    </div>
);

Sidebar.propTypes = {
    state: PropTypes.object,
}

export default Sidebar;