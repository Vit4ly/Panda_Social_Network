import React from "react";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'it\'s my first post', likesCount: 12},
        ],

    },
    messagesPage: {
        messagesData: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'How are you'},
            {id: 4, message: 'How'},
            {id: 5, message: 'Anya'},
        ],
        dialogs: [
            {id: 1, name: 'Dim'},
            {id: 2, name: 'Vlad'},
            {id: 3, name: 'Roma'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Anya'},
        ],
    }
}

export default state;