import React from 'react';
import './MyPosts.css';
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return <div>
        <div>
            My posts
        </div>
        <div className={'MyPosts_new'}>
            <Posts message={'Hi, how are you'} likesCount={0}/>
            <Posts message={'it\'s my first post'} likesCount={23}/>
        </div>
    </div>
};
export default MyPosts;