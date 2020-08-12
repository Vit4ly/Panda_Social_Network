import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts}
                 updateNewPostText={props.updateNewPostText}
                 newPostText={props.state.newPostText}
                 addPost={props.addPost}/>
    </div>
}
export default Profile;