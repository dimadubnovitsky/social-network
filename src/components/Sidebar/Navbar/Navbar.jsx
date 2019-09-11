import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
// import Routes from '../../config/routes';

const Navbar = () => (
    <nav>
        {/*{Routes.map((route, index) => (*/}
            {/*<div className={classes.item} key={index}>*/}
                {/*<a href={route.path}>{route.title}</a>*/}
            {/*</div>*/}
        {/*))}*/}
        <div className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
        </div>
    </nav>
);

export default Navbar;