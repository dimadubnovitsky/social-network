import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, setUserProfile} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1443;
        }
        this.props.getUserProfileThunkCreator(userId);

        // let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId = 1443;
        // }
        // profileAPI.getProfile(userId).then(data => {
        //     this.props.setUserProfile(data);
        // });
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);