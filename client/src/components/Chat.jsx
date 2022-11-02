import React from "react";

import '../css/components/Chat.css'

import Message from "./Message";

const Chat = ({profile_pic, chatName, messages}) => {

    return(
        <div className="chat-container">
            <div className="chat-header">
                <img className='header-picture' src={profile_pic} alt="profile picture" />
                <p className='header-name'>{chatName}</p>
            </div>

            <div className="chat-messages">
                <Message text={"Acorda Rodolfo."} isOwner = {true}></Message>
                <Message text={"ZZZZZZZZZ"} isOwner = {false}></Message>
                <Message text={"Acorda Rodolfo!!"} isOwner = {true}></Message>
                <Message text={"ZZZZZZZZZ"} isOwner = {false}></Message>
                <Message text={"RODOLFO!!"} isOwner = {true}></Message>
                <Message text={"ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"} isOwner = {false}></Message>
            </div>

            <div className="chat-message-bar">
                <input type="text" />
            </div>
        </div>
    )
}

export default Chat