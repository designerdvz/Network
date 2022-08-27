
let ADD_MESSAGE = 'ADD-MESSAGE'
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

 const messageReducer = (state = initialState, action) => {
       switch (action.type) {
           case UPDATE_NEW_MESSAGE_TEXT:
               return {...state,
               newMessageText: action.newText
           }
           case ADD_MESSAGE: {
               let text= state.newMessageText
               return {
                   ...state,
                   newMessageText: '',
                   MessageData: [...state.MessageData,   {text: text,
                   id: "5" }]
               }
           }
           default: return state;
       }
}
 export const addMessageActionCreator = () => {
     return {
         type: ADD_MESSAGE
     }
 }

 export const updateNewMessageTextActionCreator = (text) => ( //вместо {return} можно использовать (), если возвращается объект
     {
         type: UPDATE_NEW_MESSAGE_TEXT,
         newText: text
     })


 export default messageReducer