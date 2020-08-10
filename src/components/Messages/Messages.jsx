import React from "react";
import './Messages.css';
import DialogsItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessageItem/MessageItem";


const Messages = (props) => {
    let dialogElements = props.dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElement = props.messagesData
        .map(m => <MessagesItem message={m.message}/>);
    return (
        <div className={'messages'}>
            <div className={'messages_item'}>
                {dialogElements}
            </div>

            <div className={'messages_window'}>
                {messagesElement}
            </div>

        </div>
    )
};

export default Messages;