import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunk,
    getUserStatusThunk,
    setUserProfile,
    updateUserStatusThunk
} from "../../redux/profilePageReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1443;
        }
        this.props.getUserProfileThunk(userId);
        this.props.getUserStatusThunk(userId);
    }

    render() {
        return <div>
            {this.props.isAuth
                ? <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                           updateUserStatusThunk={this.props.updateUserStatusThunk}/>
                : <Redirect to={"/login"}/>}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUserProfileThunk,
        getUserStatusThunk,
        updateUserStatusThunk
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);