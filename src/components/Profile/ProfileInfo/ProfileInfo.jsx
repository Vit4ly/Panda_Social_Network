import React from 'react';
import './ProfileInfo.css';


const ProfileInfo = (props) => {
    return <div className={'content'}>
        <div>
            <img className={'content_started'}
                 src={'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-1823829/1228dae7d26db4f3b61dc212c23f6cce/preview.png?t=1594734704056'}
                 alt={'Text'}/>
        </div>
        <div className={'content_description'}>
            ava+description
        </div>
    </div>
}
export default ProfileInfo;
