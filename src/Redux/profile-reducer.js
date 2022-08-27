let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE'
let initialState = {
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
    newPostText: 'yo',
    profile: null
}

const profileReducer = (state = initialState,action) => {

    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                text: state.newPostText,
                counter: "33"
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }

}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => ( //вместо {return} можно использовать (), если возвращается объект
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export default profileReducer