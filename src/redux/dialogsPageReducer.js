const SEND_MESSAGE = 'MA/DIALOGS_PAGE/SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'MA/DIALOGS_PAGE/UPDATE_NEW_MESSAGE_TEXT';


let initialState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Yo!'},
        {id: 3, message: 'How are you?'}
    ],
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Zhenya'},
        {id: 5, name: 'Kuzya'}
    ],
    newMessageText: ''
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case    UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        case    SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: state.newMessageText}],
                newMessageText: ''
            }
        }
        default:
            return state;
    }
}

export const sendMessageAC = () => {
    return {type: SEND_MESSAGE}
}

export const updateNewMessageTextAC = (messageText) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: messageText}
}

export default dialogsPageReducer;