import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../Redux/message-reducer";


const Dialogs = (props) => {

    // let newMessageElement = React.createRef()

    let dialogsElements = [
        props.DialogData.map( el => ( <Dialog name = {el.name} id = {el.id} key = {el.id}  AvaSrc = {el.AvaSrc}/>) )
    ]

    let messageElements = [
        props.MessageData.map (el => (
            <Message text={el.text} key = {el.id}  id = {el.id}
            />))
    ]

    let onMessageChange = (e) => {
        let text = e.target.value
       props.onMessageChange(text)
    }

    function addMessage () {
        props.addMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.newMessage}>
                    <textarea onChange={onMessageChange} name="message" value={props.newMessageText}></textarea>
                    <button onClick={ addMessage }> Отправить </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;