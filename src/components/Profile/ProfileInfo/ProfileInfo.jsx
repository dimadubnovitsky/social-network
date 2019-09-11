import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src='http://wowslider.com/sliders/demo-65/data1/images/bernese_oberland.jpg' alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                <div><img src={props.profile.photos.large}/></div>
                <span>{props.profile.fullName}</span>
                <div>{props.profile.lookingForAJob ? "yes" : "no" }</div>
            </div>
        </div>
    )
}

export default ProfileInfo;