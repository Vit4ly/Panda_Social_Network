import React from 'react';
import './MyPosts.css';
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
const postsElement = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
    // let text = newPostElement.current.value;
        props.addPost();
        // newPostElement.current.value = '';
        props.updateNewPostText('')
    };

const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
}

    return <div className={'myPosts'}>
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
                <button onClick={ addPost }>Send</button>
            </div>
        </div>
        <div className={'myPosts_new'}>
            {postsElement}
        </div>
    </div>

};
export default MyPosts;