import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsPageReducer from "./redux/dialogsPageReducer";
import profilePageReducer from "./redux/profilePageReducer";
import sidebarReducer from "./redux/sidebarReducer";
import {Provider} from "react-redux";
import usersReducer from "./redux/usersReducer";
import authReducer from "./redux/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

const combinedReducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}>
    <App/> </Provider>, document.getElementById('root'));


// rerenderEntireTree(store.getState());


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 
