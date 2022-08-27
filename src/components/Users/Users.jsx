import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followAPI, followDelete, followPost} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div className={s.all}>
        <div className={s.pagination}>
            {pages.map(p => {
                return <span onClick={(e) => {
                    props.onPageChange(p)
                }} className={props.currentPage === p && s.selectedPage}>{p}</span>
            })}
        </div>
        <div>

        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <div className={s.wrapper}>
                        <div className={s.avaFollow}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                                </NavLink>

                            </div>
                            <div>
                                {u.followed ?
                                    <button className={s.follow} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                       props.toggleFollowingInProgress(true, u.id)
                                        let a = props.followingInProgress
                                        followAPI.followDelete(u).then(data => {
                                                if (data.resultCode == 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingInProgress(false, u.id)
                                            }
                                        );
                                    }}> Unfollow </button> :
                                    <button className={s.unfollow} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleFollowingInProgress(true, u.id)

                                        let a = props.followingInProgress
                                        followAPI.followPost(u).then(data => {
                                                if (data.resultCode == 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingInProgress(false, u.id)
                                            }
                                        );
                                    }}>follow </button>
                                }
                            </div>
                        </div>
                        <div className={s.NameStatusLocation}>
                            <div className={s.NameStatus}>
                                <div className={s.name}>{u.name}</div>
                                <div className={s.status}>{u.status}</div>
                            </div>
                            <div className={s.Location}>
                                <div className={s.city}>{"u.location.city"}</div>
                                <div className={s.country}>{"u.location.country"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users