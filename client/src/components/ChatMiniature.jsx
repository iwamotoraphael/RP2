import React from "react";

import '../css/components/ChatMiniature.css'

const ChatMiniature = ({profile_pic, profile_name}) => {

    return(
        <div className='miniature-container'>
            <img className='chat-picture' src={profile_pic} alt="profile picture" />
            <p className='chat-name'>{profile_name}</p>
        </div>
    )
}

export default ChatMiniature