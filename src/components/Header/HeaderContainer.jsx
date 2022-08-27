import React from "react";
import s from './Header.module.css';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {authAPI, authGet} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
      authAPI.authGet().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                this.props.setAuthUserData(id, login, email)
            }
        });
    }

    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}
const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

