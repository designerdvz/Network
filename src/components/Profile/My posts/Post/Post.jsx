import React from "react";
import s from './Post.module.css'

function Post(props) {
    return (
                    <div className={s.item}>
                        <img src={'https://vjoy.cc/wp-content/uploads/2021/01/unnamed-5-1.jpg'}/>
                        <span className={s.postText}>
                            {props.message}</span>
                        <div className={s.like}>
                            <span> <img src={"heart.png"}/> </span>
                            <span className={s.counter}> {props.counter} </span>
                        </div>
                    </div>
    )
}

export default Post

