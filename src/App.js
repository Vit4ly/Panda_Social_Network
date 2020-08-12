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
import {addPost} from "./components/Redax/State";





const App = (props) => {

    return (

            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app_wrapper_content'}>
                    {/*<Route path={'/Profile'} component={Profile}/>*/}
                    {/*<Route path={'/Messages'} component={Messages}/>*/}
                    <Route path={'/Profile'} render={() => <Profile state={props.state.profilePage}
                                                                    addPost={props.addPost}
                                                                    updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path={'/Messages'} render={() => <Messages state={props.state.messagesPage}/>}/>


                    <Route path={'/News'} render={() => <News />}/>
                    <Route path={'/Music'} render={() => <Music />}/>
                    <Route path={'/Settings'} render={() => <Settings />}/>
                </div>
            </div>

    );
}

export default App;
