import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={'conetent'}>
        <div>
            <img className={'content_started'} src={'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-1823829/1228dae7d26db4f3b61dc212c23f6cce/preview.png?t=1594734704056'} alt={'Text'}/>
        </div>
        <div>
            ava+description
        </div>
       <MyPosts/>
    </div>
}
export default Profile