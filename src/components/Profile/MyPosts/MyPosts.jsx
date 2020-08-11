import React from 'react';
import './MyPosts.css';
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
let postsElement = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()
    let addPost = () => {
    let text = newPostElement.current.value;
        alert(text)
    };

    return <div className={'myPosts'}>
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={ addPost }>Send</button>
            </div>
        </div>
        <div className={'myPosts_new'}>
            {postsElement}
        </div>
    </div>

};
export default MyPosts;