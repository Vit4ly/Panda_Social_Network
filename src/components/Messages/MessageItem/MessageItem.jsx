import React from "react";
import './MessageItem.css';





const MessagesItem = (props) => {
    return (
        <div className={'messages_message'}>{props.message}</div>
    )
}



export default MessagesItem;