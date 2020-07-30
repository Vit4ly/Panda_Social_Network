import React from "react";
import './Messages.css';
import DialogsItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessageItem/MessageItem";


const Messages = (props) => {

    let dialogs = [
        {id: 1, name: 'Dim'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Roma'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Anya'},
    ]

    let dialogElements = dialogs
        .map((d) => <DialogsItem name={d.name} id={d.id}/>);

    let messagesData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'How'},
        {id: 5, message: 'Anya'},
    ]

    let messagesElement = messagesData
        .map(m => <MessagesItem message={m.message}/>);

    return (
        <div className={'messages'}>
            <div className={'messages_item'}>
                Gh
                {dialogElements}
            </div>

            <div className={'messages_window'}>
                {messagesElement}
            </div>

        </div>
    )
};

export default Messages;