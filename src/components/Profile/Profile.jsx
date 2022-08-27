import React from "react";
import s from './Profile.module.css'
import AvaDescription from "./AvaDescription/AvaDescription";
import MyPostsContainer from "./My posts/MyPostsContainer";

function Profile(props) {
    return (
        <div className={s.content}>
               <AvaDescription profile = {props.profile}/>
                <MyPostsContainer />
        </div>
    )
}

export default Profile

