import React from "react"
import s from "./ProfileStatus.module.css"

let ProfileStatus = (props) => {
    return (<>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status}></input>
            </div>
        </>
    )
}

export default ProfileStatus