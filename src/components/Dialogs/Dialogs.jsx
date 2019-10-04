import React from 'react';
import PropTypes from 'prop-types';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} component={Textarea}
                       name={"newMessageText"} validate={[required]}/>
            </div>
            <div>
                <button type="submit">Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "DialogAddMessageForm"})(AddMessageForm)


const Dialogs = (props) => {
    let addMessage = (values) => {
        props.sendMessage(values.newMessageText);
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
                <AddMessageFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    )
}

Dialogs.propTypes = {
    state: PropTypes.object,
}

export default Dialogs;