import React from "react";
import "../css/components/Navbar.css"

import language from "../img/language.png";
import home from "../img/home.png";
import network from "../img/network.png";
import messages from "../img/chats.png";
import notifications from "../img/notifications.png";
import signOut from "../img/sign-out.png";

const Navbar = () =>{

    return(
        <>
            <div className="navbar">
                <div className="navbar-item">
                        <img src={language} alt="" />
                        <div>Languages</div>
                </div>

                <div className="navbar-item">
                    <a href="/home">
                        <img src={home} alt="" />
                        <div>Home</div>
                    </a>
                </div>

                <div className="navbar-item">
                    <a href="/network">
                        <img src={network} alt="" />
                        <div>Network</div>
                    </a>
                </div>

                <div className="navbar-item">
                    <a href="/messages">
                        <img src={messages} alt="" />
                        <div>Messages</div>
                    </a>
                </div>

                <div className="navbar-item">
                        <img src={notifications} alt="" />
                        <div>Notifications</div>
                </div>

                <div className="navbar-item">
                    <a href="/">
                        <img src={signOut} alt="" />
                        <div>Sign Out</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar;