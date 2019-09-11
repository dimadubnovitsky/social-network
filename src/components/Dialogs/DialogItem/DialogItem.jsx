import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

DialogItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
}

export default DialogItem;