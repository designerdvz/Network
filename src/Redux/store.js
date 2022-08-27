import {observe} from "web-vitals/dist/modules/lib/observe";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {

    _state : {

        profile: {
            postData: [
                {
                    text:"Ура, мой первый пост",
                    counter: "12"
                },
                {
                    text:"Ура, мой второй пост",
                    counter: "42"
                },
                {
                    text:"Ямахо, ямасо",
                    counter: "12"
                },
                {
                    text:"Ура, мой второй пост",
                    counter: "42"
                }
            ],
            newPostText: 'yo'
        },

        message: {
            MessageData: [
                {
                    text: "Hi1",
                    id: "1"
                },
                {
                    text: "MEAYYY",
                    id: "2"

                },
                {
                    text: "Mey",
                    id: "1"
                },
                {
                    text: "Gov",
                    id: "2"

                }
            ],
            newMessageText: '',
            DialogData: [
                {
                    name: "Rexi",
                    id: "1",
                    AvaSrc: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

                },
                {
                    name: "Angel",
                    id: "2",
                    AvaSrc: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

                },
                // {
                //     name: "Deni",
                //     id: "1",
                //     AvaSrc: "https://images.unsplash.com/photo-1554224311-beee415c201f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                // },
                {
                    name: "Luxor",
                    id: "2",
                    AvaSrc: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"

                }
            ]
        }
    },
    _callSubscriber() {} ,
    getState() {
        return this._state
    },
    subscribe (observer)  {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.message = messageReducer(this._state.message, action)
        this._callSubscriber(this._state)

    }
}



export default store
