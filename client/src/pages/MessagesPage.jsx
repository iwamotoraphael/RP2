import React from "react";

import Chat from "../components/Chat";
import ChatMiniature from "../components/ChatMiniature";
import Header from "../components/Header";
import SideProfile from "../components/SideProfile"

import '../css/pages/MessagesPage.css'

const MessagesPage = () =>{

    return (
        <>
            <Header/>
            <div className="messages-page-wrapper">
                <div className="chat-miniature-wrapper">
                    <ChatMiniature className='chat-miniature' profile_name='Rodolfo' profile_pic='https://i.ytimg.com/vi/q3TGuz6e5a4/mqdefault.jpg'></ChatMiniature>
                    <ChatMiniature className='chat-miniature' profile_name='Rodolfo' profile_pic='https://i.ytimg.com/vi/q3TGuz6e5a4/mqdefault.jpg'></ChatMiniature>
                    <ChatMiniature className='chat-miniature' profile_name='Rodolfo' profile_pic='https://i.ytimg.com/vi/q3TGuz6e5a4/mqdefault.jpg'></ChatMiniature>
                </div>
                <Chat profile_pic='https://i.ytimg.com/vi/q3TGuz6e5a4/mqdefault.jpg' chatName={'Rodolfo'}></Chat>
                <SideProfile profile_name={'Rodolfo'} profile_pic="https://i.ytimg.com/vi/q3TGuz6e5a4/mqdefault.jpg"></SideProfile>
            </div>
        </>
    )
}

export default MessagesPage;