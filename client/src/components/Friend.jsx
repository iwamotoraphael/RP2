import React from 'react'
import { useState, useEffect } from 'react';

import '../css/components/Friend.css'

import { useNavigate } from 'react-router-dom';
import { getUser } from '../services/api';

const Friend = ({profile_id}) => {

    const history = useNavigate()
    
    const [friend, setFriend] = useState({})

    const handleFriendClick = ()=>{
        history(`/user/${encodeURIComponent(profile_id)}`)
    }

    useEffect(() => {
        getUser(profile_id).then((u) => {setFriend(u.data)})
    }, [])

    return (
        <div className='friend-container'>
            <img className='friend-picture' src={friend.fotoPerfil} alt="profile picture" />
            <p className='friend-name' onClick={() => handleFriendClick()}>{friend.nome}</p>
        </div>
    );
}
 
export default Friend;