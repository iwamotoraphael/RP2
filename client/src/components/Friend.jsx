import React from 'react'

import '../css/components/Friend.css'

const Friend = ({profile_pic, profile_name}) => {
    return (
        <div className='friend-container'>
            <img className='friend-picture' src={profile_pic} alt="profile picture" />
            <p className='friend-name'>{profile_name}</p>
        </div>
    );
}
 
export default Friend;