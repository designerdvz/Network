import React from "react";
import s from './Profile.module.css'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";



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
            <Profile {...this.props} profile={ this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile
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



export default connect(mapStateToProps, {
    setUserProfile})(withRouter(ProfileContainer))





