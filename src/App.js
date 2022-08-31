import logo from './logo.svg';
import React from 'react'
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App(props) {
    return (
        <HashRouter>
            <div className={"app_wrapper"}>
                <Nav/>
                <HeaderContainer/>
                <div className={"app_wrapper_content"}>
                    <Routes>
                        <Route path={'/Profile'} element={<ProfileContainer/>}/>
                        <Route path={'/Profile/:profileId'} element={<ProfileContainer/>}/>
                        <Route path={'/Dialogs/*'} element={<DialogsContainer/>}/>
                        <Route path={'/Friends/*'} element={<Friends/>}/>
                        <Route path={'/News/*'} element={<News/>}/>
                        <Route path={'/Music/*'} element={<Music/>}/>
                        <Route path={'/Settings/*'} element={<Settings/>}/>
                        <Route path={'/Users/*'} element={<UsersContainer/>}/>
                        <Route path={'/login/*'} element={<Login/>}/>

                    </Routes>
                </div>
            </div>
        </HashRouter>

    );
}

export default App;
