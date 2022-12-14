import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        postData: state.profile.postData,
        newPostText: state.profile.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer

