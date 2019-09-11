import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

Message.propTypes = {
    message: PropTypes.string,
}

export default Message;