
import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    message: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

window.store = store

export default store
