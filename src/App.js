import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";





const App = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app_wrapper_content'}>
                    <Route path={'/Profile'} component={Profile}/>
                    <Route path={'/Messages'} component={Messages}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
