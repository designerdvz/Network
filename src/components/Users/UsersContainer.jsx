import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    changePage,
    setTotalUserCount,
    toggleIsFetching,
    toggleFollowingInProgress, getUsersThunkCrator, getUsersThunkCreator, getUsers, unfollowThunk, followThunk
} from "../../Redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";
import {withAuthNavigation} from "../../hoc/AuthNavigate";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pagesize)
    }

    onPageChange = (pageNumber) => {
        this.props.changePage(pageNumber)
        this.props.getUsers(this.props.currentPage, this.props.pagesize)

    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   unfollowThunk ={this.props.unfollowThunk}
                   followThunk ={this.props.followThunk}
                   followingInProgress = {this.props.followingInProgress}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   isAuth = {this.props.isAuth}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

let withNavigate = withAuthNavigation(UsersContainer)

export default compose(
    withAuthNavigation,
    connect(mapStateToProps, {
    follow,
    unfollow,
    changePage,
    toggleFollowingInProgress,
    getUsers,
    unfollowThunk,
    followThunk
}),
    )(UsersContainer)