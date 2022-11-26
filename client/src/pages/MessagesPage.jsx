import React from "react";
import { useState, useEffect } from "react";

import Chat from "../components/Chat";
import ChatMiniature from "../components/ChatMiniature";
import Header from "../components/Header";
import SideProfile from "../components/SideProfile"

import { getChat, getNetworkData, getUser } from "../services/api";

import '../css/pages/MessagesPage.css'

const jwt = require('jsonwebtoken');

const MessagesPage = () =>{

    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)
    const [friends, setFriends] = useState([])
    const [friend, setFriend] = useState(null)

    useEffect(() => {
        getNetworkData(decodedToken.userId).then((n) => {setFriends(n.data.amigos)})
    }, [])

    useEffect(() => {
        if(friends.length > 0){
            getUser(friends[0]).then((u) => {setFriend(u.data); console.log(u.data)})
        }
    }, [friends])

    return (
        <>
            <Header/>
            <div className="messages-page-wrapper">
                <div className="chat-miniature-wrapper">
                    {friends.map((f) => <ChatMiniature className='chat-miniature' profile_id={f}></ChatMiniature>)}
                </div>
                {friend === null ? <></> : <Chat friendId={friend._id}></Chat>}
                {friend === null ? <></> : <SideProfile profile_name={friend.nome} profile_pic={friend.fotoPerfil}></SideProfile>}
            </div>
        </>
    )
}

export default MessagesPage;