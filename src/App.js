import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = props => (
    <BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer store={props.store}/>
            <Sidebar store={props.store}/>
            <div className='app-wrapper-content'>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer store={props.store}/>}/>
            </div>
        </div>
    </BrowserRouter>
);

App.propTypes = {
    state: PropTypes.object,
}

export default App;