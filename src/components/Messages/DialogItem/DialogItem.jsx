import React from "react";
import {NavLink} from "react-router-dom";
import '../DialogItem/DialogItem.css';


const DialogsItem = (props) => {
    let path = '/Messages/1' + props.id;
    return (
        <div className={'item'}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

export default DialogsItem;