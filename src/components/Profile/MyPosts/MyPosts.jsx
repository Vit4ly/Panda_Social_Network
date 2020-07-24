import React from 'react';
import './MyPosts.css';
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return <div>
    <div>
        My posts
    </div>
        <div className={'MyPosts_new'}>
            <Posts message={'Hi, how are you'}/>
            <Posts message={'it\'s my first post'}/>
        </div>
    </div>
};
export default MyPosts;