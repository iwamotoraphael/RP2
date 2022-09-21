import React from 'react'

import '../css/components/SideProfile.css'

const SideProfile = ({profile_pic, profile_name, bio}) => {
    return (
        <div className='side-profile'>
            <img className='profile-picture' src={profile_pic} alt="profile picture" />
            <p className='profile-name'>{profile_name}</p>
            <p className='bio'>{bio}</p>
        </div>
    );
}
 
export default SideProfile;