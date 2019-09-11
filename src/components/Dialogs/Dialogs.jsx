import React from 'react';
import PropTypes from 'prop-types';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (event) => {
        let messageText = event.target.value;
        props.onMessageChange(messageText);
    }

    if (!props.isAuth) {
        return <Redirect to='/login'/>
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)}
                <div>
                    <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

Dialogs.propTypes = {
    state: PropTypes.object,
}

export default Dialogs;