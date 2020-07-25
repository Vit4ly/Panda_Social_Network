import React from 'react';
import './Posts.css';

const Posts = (props) => {
    return (
        <div className={'Posts'}>
            <img src={'https://image.freepik.com/free-vector/_42750-498.jpg'} alt={'Avatar'}/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
};

export default Posts;


