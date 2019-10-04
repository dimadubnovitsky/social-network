const SEND_MESSAGE = 'MA/DIALOGS_PAGE/SEND_MESSAGE';

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
    ]
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case    SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessageText}],
            }
        }
        default:
            return state;
    }
}

export const sendMessageAC = (newMessageText) => {
    return {type: SEND_MESSAGE, newMessageText: newMessageText}
}

export default dialogsPageReducer;