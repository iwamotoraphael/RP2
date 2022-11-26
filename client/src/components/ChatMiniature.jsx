import React from "react";
import { useState, useEffect } from "react";

import '../css/components/ChatMiniature.css'

import { getUser } from "../services/api";

const ChatMiniature = ({profile_id}) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        getUser(profile_id).then((f) => {setUser(f.data)})
    }, [])

    return(
        <div className='miniature-container'>
            <img className='chat-picture' src={user.fotoPerfil} alt="profile picture" />
            <p className='chat-name'>{user.nome}</p>
        </div>
    )
}

export default ChatMiniature