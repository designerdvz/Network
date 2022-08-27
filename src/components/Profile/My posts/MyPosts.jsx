import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


let MyPosts = (props)  => {

    let newPostElement = React.createRef()

    let postElements =
        props.postData.map( el =>
            (<Post message = {el.text} key = {el.id} counter = {el.counter}/> )
        )

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text)
    }

    function onAddPost () {
       props.addPost();
    }

    return (
            <div className={s.posts}>
                <div className={s.label}>
                    My post
                </div>
                <div className={s.new_post}>
                    <textarea onChange={onPostChange} name="post" ref = {newPostElement} value={props.newPostText}></textarea>
                    <button onClick={ onAddPost }>Создать пост</button>
                </div>
                {postElements}
            </div>
    )
}

export default MyPosts

