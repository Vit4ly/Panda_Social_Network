import React from "react";
import './Messages.css';
import {NavLink} from "react-router-dom";


const Messages = (props) => {
    return (
        <div className={'messages'}>
            <div className={'messages_item'}>

                <div className={'item'}>
                    <NavLink to={'/Dim'}> Dim </NavLink>
                </div>

                <div className={'item'}>
                    <NavLink to={'/Vlad'}> Vlad </NavLink>
                </div>

                <div className={'item'}>
                    <NavLink to={'/Roma'}> Roma </NavLink>
                </div>

                <div className={'item'}>
                    <NavLink to={'/Sasha'}> Sasha </NavLink>
                </div>

                <div className={'item'}>
                    <NavLink to={'/Anya'}> Anya </NavLink>
                </div>

            </div>

            <div className={'messages_window'}>
                <div className={'messages_message'}>
                    Hi
                </div>
                <div className={'messages_message'}>
                    How are you
                </div>
                <div className={'messages_message'}>
                    How
                </div>
            </div>
        </div>
    )
};

export default Messages;