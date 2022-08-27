import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    changePage,
    setTotalUserCount,
    toggleIsFetching,
    toggleFollowingInProgress
} from "../../Redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUser(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUserCount(data.totalCount)
        });
    }

    onPageChange = (pageNumber) => {
        this.props.changePage(pageNumber)
        this.props.toggleIsFetching(true)
        userAPI.getUser(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
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
                   followingInProgress = {this.props.followingInProgress}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changePage,
    setTotalUserCount,
    toggleIsFetching,
    toggleFollowingInProgress
})(UsersContainer)