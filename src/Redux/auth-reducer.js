import {authAPI, followAPI} from "../api/api";
import {toggleFollowingInProgress, unfollow} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA'
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default: return state;
    }
}
export const setAuthUserData = (id, login, email) => ({
    type: SET_USER_DATA, data: {
        id,
        login,
        email
    }
})


export const authThunk  = () => {
    return (dispatch) => {
        authAPI.authGet().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        });
    }}



export default authReducer