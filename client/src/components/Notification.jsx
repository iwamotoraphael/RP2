import React from 'react';
import { useState, useEffect } from 'react';
import { getUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

import { postAcceptFriendRequest, deleteRemoveFriendRequest } from '../services/api';

import Button from './Button';

import '../css/components/Notification.css'

const Notification = ({userId, requestId, updateFunction}) => {
    const history = useNavigate();

    const [user, setUser] = useState({})

    useEffect(() => {
        getUser(requestId).then((u) =>{setUser(u.data)})
    }, [])

    const handleAcceptRequest = async (_friendId, _userId) => {
        try{
            const response = await postAcceptFriendRequest(_friendId, _userId)

            updateFunction()

            return response
        }
        catch(err){
            console.log(err)
        }  
    }

    const handleDeclineRequest = async(_friendId, _userId) => {
        try{
            const response = await deleteRemoveFriendRequest(_userId, _friendId)

            updateFunction()

            return response
        }
        catch(err){
            console.log(err)
        }  
    }

    const handleClickName = () => {
        history(`/user/${encodeURI(requestId)}`)
    }

    return(
    <div className='notification-container'>
        <img className="notification-photo" src={user.fotoPerfil} alt="Profile picture"/>
        <div className="notification-text">
            <span className="notification-username" onClick={() => {handleClickName()}}>{user.nome}</span>
            <span> sent you a friend request.</span>
            <div className="notification-buttons">
                <Button className = 'notification-button' onClick={() => {handleAcceptRequest(requestId, userId)}}>Accept</Button>
                <Button className = 'notification-button' onClick={() => {handleDeclineRequest(requestId, userId)}}>Decline</Button>
            </div>  
        </div>
    </div>
    )
}

export default Notification