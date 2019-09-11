import React from 'react';
import PropTypes from 'prop-types';
import classes from './FriendsItem.module.css';

const FriendsItem = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.image} alt=''/>
            <div className={classes.name}>{props.name}</div>
        </div>
    )
}

FriendsItem.propTypes = {
    state: PropTypes.object,
}

export default FriendsItem;