import React from "react";
import s from './Profile.module.css'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthNavigation} from "../../hoc/AuthNavigate";
import {compose} from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {

        let profileId = this.props.profileId;
        if (!profileId) {
            profileId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} isAuth = { this.props.isAuth} profile={ this.props.profile}/>
        )
    }
}



let AuthNavigateComponent = withAuthNavigation(ProfileContainer)




let mapStateToProps = (state) => ({
    profile: state.profile.profile,
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
       let {profileId} = useParams()
        return (
            <Component
                {...props}
                profileId={profileId}
            />
        );
    }

    return ComponentWithRouterProp;
}


export default compose(
    connect(mapStateToProps, {
        setUserProfile}),
    withRouter,
    // withAuthNavigation
)(ProfileContainer)




