import React from 'react';
import PropTypes from 'prop-types';
import classes from './FriendsList.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

const FriendsList = (props) => {
    return (
        <div className={classes.list}>
            <div className={classes.title}>Friends</div>
            <div className={classes.items}>
                {props.sidebar.friends.map(f => <FriendsItem key={f.id} name={f.name} image={f.imageUrl}/>)}
            </div>
        </div>
    )
}

FriendsList.propTypes = {
    state: PropTypes.object,
}


export default FriendsList;