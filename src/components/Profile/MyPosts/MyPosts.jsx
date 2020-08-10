import React from 'react';
import './MyPosts.css';
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
let postsElement = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)
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