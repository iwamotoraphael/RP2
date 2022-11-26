import React from "react";
import { useState, useEffect } from "react";
import '../css/components/Chat.css'

import Message from "./Message";
import Button from "./Button";
import { getChat, getUser, postChat } from "../services/api";

const jwt = require('jsonwebtoken');

const Chat = ({friendId}) => {

    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)
    const [friend, setFriend] = useState({})
    const [chat, setChat] = useState({})

    useEffect(() => {
        if(friendId !== ''){
            getUser(friendId).then((f) => {setFriend(f.data)})
            getChat(decodedToken.userId, friendId).then((c) => {setChat(c.data)})
        }
    }, [])

    const handleCreateConversation = async (senderId, receiverId) => {
        await postChat(senderId, receiverId)
    }

    return(
        <div className="chat-container">
            <div className="chat-header">
                <img className='header-picture' src={friend.fotoPerfil} alt="profile picture" />
                <p className='header-name'>{friend.nome}</p>
            </div>

            <div className="chat-messages">
               {chat === null ? <Button onClick={() => {handleCreateConversation(decodedToken.userId, friend._id)}}>Start a Chat</Button>:<div>chat</div>}
            </div>

            <div className="chat-message-bar">
                <input type="text" />
            </div>
        </div>
    )
}

export default Chat