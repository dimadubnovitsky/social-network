import React from 'react';
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// const DialogsContainer = (props) => {
//     let state = props.store.getState();
//
//     let sendMessage = () => {
//         props.store.dispatch(sendMessageAC());
//     }
//
//     let onMessageChange = (messageText) => {
//         props.store.dispatch(updateNewMessageTextAC(messageText));
//     }
//     return (
//         <Dialogs sendMessage={sendMessage} onMessageChange={onMessageChange}
//                  dialogsPage={state.dialogsPage}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        onMessageChange: (messageText) => {
            dispatch(updateNewMessageTextAC(messageText))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);