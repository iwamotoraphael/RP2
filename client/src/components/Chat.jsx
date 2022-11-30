import React from "react";
import { useState, useEffect } from "react";
import '../css/components/Chat.css'

import Message from "./Message";
import Button from "./Button";
import { api, getChat, getMessages, getUser, postChat, postMessage } from "../services/api";

const jwt = require('jsonwebtoken');

const Chat = ({friendId, socket}) => {

    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)
    const [friend, setFriend] = useState({})
    const [chat, setChat] = useState({})
    const [messages, setMessages] = useState([])
    const [arrivalMessage, setArrivalMessage] = useState(null)

    useEffect(() => {
        if(friendId !== ''){
            getUser(friendId).then((f) => {setFriend(f.data)})
            getChat(decodedToken.userId, friendId).then((c) => {setChat(c.data)})
        }
        socket.on("getMensagem", (data) => {
            console.log('msg')
            setArrivalMessage({
                emissor: data.idEmissor,
                texto: data.textoMensagem,
                createdAt: Date.now()
            })
        })
    }, [])

    useEffect(() => {
        if(arrivalMessage && chat.membros.includes(arrivalMessage.emissor)){
            setMessages([...messages, arrivalMessage])
        }
            
    }, [arrivalMessage])

    useEffect(() => {
        const chatScroll = document.getElementById("chatMessages")
        chatScroll.scrollTop = chatScroll.scrollHeight;
        if(chat !== null)
            getMessages(chat._id).then((m) => {setMessages(m.data)})
    }, [chat])

    const handleMessageSubmit = async () => {
        socket.emit("enviarMensagem", {
            idEmissor: decodedToken.userId, 
            idReceptor: friendId, 
            textoMensagem: document.getElementById("message-text").value
        })

        try{
            if(document.getElementById("message-text").value.length > 0){
                const resp = await postMessage(decodedToken.userId, document.getElementById("message-text").value, chat._id)
                document.getElementById("message-text").value = '' 
                setMessages([...messages, resp.data])
            }
        }
        catch(err){
            console.log(err)
        }
    } 

    const handleCreateConversation = async (senderId, receiverId) => {
        await postChat(senderId, receiverId)
        getChat(decodedToken.userId, friendId).then((c) => {setChat(c.data)})
    }

    return(
        <div className="chat-container" id={friendId}>
            <div className="chat-header">
                <img className='header-picture' src={friend.fotoPerfil} alt="profile picture" />
                <p className='header-name'>{friend.nome}</p>
            </div>

            <div className="chat-messages" id="chatMessages">
               {chat === null ? <Button onClick={() => {handleCreateConversation(decodedToken.userId, friend._id)}}>Start a Chat</Button>:<></>}
               {messages.map((m) => <Message isOwner={m.emissor === decodedToken.userId} text={m.texto}></Message>)}
            </div>

            {chat !== null ? 
            <div className="chat-message-bar">
                <input className="chat-text-area" id="message-text" type="text"/>
                <Button onClick={handleMessageSubmit}>Send</Button>
            </div>: <></>}
        </div>
    )
}

export default Chat