import React from "react";
import { useState, useEffect } from "react";
import {io} from 'socket.io-client';

import Chat from "../components/Chat";
import ChatMiniature from "../components/ChatMiniature";
import Header from "../components/Header";
import SideProfile from "../components/SideProfile"

import { getNetworkData, getUser } from "../services/api";

import '../css/pages/MessagesPage.css'

const jwt = require('jsonwebtoken');

const MessagesPage = () =>{

    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)
    const [friends, setFriends] = useState([])
    const [friend, setFriend] = useState(null)
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        setSocket(io("ws://localhost:8900"))
        getNetworkData(decodedToken.userId).then((n) => {setFriends(n.data.amigos)})
    }, [])

    useEffect(() => {
        if(socket !== null){
            socket.emit("adicionarUsuario", decodedToken.userId)
            socket.on("getUsuarios", usuarios => {console.log(usuarios)})
    }
    }, [socket])

    useEffect(() => {
        if(friends.length > 0){
            getUser(friends[0]).then((u) => {setFriend(u.data)})
        }
    }, [friends])

    const handleSwitchFriend = (id) => {
        getUser(id).then((u) => {setFriend(null); setFriend(u.data)})
    }

    return (
        <>
            <Header/>
            <div className="messages-page-wrapper">
                {friend === null ? <div className="no-friends-message">You have not added any friends yet, you can search for other users on the search page</div>: <></>}
                <div className="chat-miniature-wrapper">
                    {friends.map((f) => <div className="miniature-wrapper" onClick={() => {handleSwitchFriend(f)}}><ChatMiniature className='chat-miniature' profile_id={f}></ChatMiniature></div>)}
                </div>
                {friend === null ? <></> : <Chat friendId={friend._id} socket={socket}></Chat>}
                {friend === null ? <></> : <SideProfile profile_name={friend.nome} profile_pic={friend.fotoPerfil}></SideProfile>}
            </div>
        </>
    )
}

export default MessagesPage;