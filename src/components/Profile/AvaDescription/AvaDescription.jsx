import React from "react";
import s from './AvaDescription.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

const AvaDescription = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
            <div className={s.ava_description}>
                <div className={s.ava}>
                    <img src={props.profile.photos.large} alt={'ava'}/>
                </div>
                <div className={s.fullName}>
                    <p>{props.profile.fullName}</p>
                </div>
                <div className={s.description}>
                    <p>description I'm deer</p>
                </div>
            </div>
    )
}

export default  AvaDescription

