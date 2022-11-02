import React from 'react'

import '../css/components/Friend.css'

import { useNavigate } from 'react-router-dom';

const Friend = ({profile_pic, profile_name}) => {

    const history = useNavigate()

    const handleFriendClick = ()=>{
        history(`/user`)
    }

    return (
        <div className='friend-container'>
            <img className='friend-picture' src={profile_pic} alt="profile picture" />
            <p className='friend-name' onClick={() => handleFriendClick()}>{profile_name}</p>
        </div>
    );
}
 
export default Friend;