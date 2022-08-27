import React from "react";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../Redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        DialogData : state.message.DialogData,
        MessageData: state.message.MessageData,
        newMessageText: state.message.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            let action = updateNewMessageTextActionCreator(text)
            dispatch(action)
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;