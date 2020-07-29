import React from "react";
import './Messages.css';
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let path = '/Messages/1' + props.id;
    return (
        <div className={'item'}>
            <NavLink to={path} > { props.name } </NavLink>
        </div>
    )
}

const MessagesItem = (props) => {
    return (
        <div className={'messages_message'}>{props.message}</div>
    )
}

const Messages = (props) => {
    return (
        <div className={'messages'}>
            <div className={'messages_item'}>
                <DialogsItem name={'Dim'} id={'1'}/>
                <DialogsItem name={'Vlad'} id={'2'}/>
                <DialogsItem name={'Roma'} id={'3'}/>
                <DialogsItem name={'Sasha'} id={'4'}/>
                <DialogsItem name={'Anya'} id={'5'}/>
            </div>

            <div className={'messages_window'}>
                <MessagesItem message={'hi'}/>
                <MessagesItem message={'How are you'}/>
                <MessagesItem message={'How are you'}/>
                <MessagesItem message={'How'}/>
                <MessagesItem message={'hi'}/>
            </div>
        </div>
    )
};

export default Messages;