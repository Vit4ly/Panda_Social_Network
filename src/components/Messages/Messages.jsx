import React from "react";
import './Messages.css';
import DialogsItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessageItem/MessageItem";


const Messages = (props) => {
    let dialogElements = props.state.dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElement = props.state.messagesData
        .map(m => <MessagesItem message={m.message}/>);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (

        <div className={'messages'}>
            <div className={'messages_item'}>
                {dialogElements}
            </div>

            <div className={'messages_window'}>
                {messagesElement}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
};

export default Messages;