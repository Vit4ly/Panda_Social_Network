import React from 'react';
import './MyPosts.css';
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return <div className={'myPosts'}>
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>
        <div className={'myPosts_new'}>
            <Posts message={'Hi, how are you'} likesCount={0}/>
            <Posts message={'it\'s my first post'} likesCount={23}/>
        </div>
    </div>
};
export default MyPosts;