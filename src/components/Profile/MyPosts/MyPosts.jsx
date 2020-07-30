import React from 'react';
import './MyPosts.css';
import Posts from "./Posts/Posts";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'it\'s my first post', likesCount: 12},
    ]
let postsElement = postData
    .map(p => <Posts message={p.message} likesCount={p.likesCount}/>)


    return <div className={'myPosts'}>
        <div>
            <h3>My posts</h3>

            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>

        </div>

        <div className={'myPosts_new'}>
            {postsElement}
        </div>

    </div>

};
export default MyPosts;