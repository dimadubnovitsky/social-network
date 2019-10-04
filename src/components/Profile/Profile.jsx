import React from 'react';
import PropTypes from 'prop-types';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
        <MyPostsContainer store={props.store}/>
    </div>
}

Profile.propTypes = {
    state: PropTypes.object,
}

export default Profile;