import React from "react";
import { useNavigate } from "react-router-dom";

import "../css/components/Navbar.css"

import search from "../img/search.png";
import logoUser from "../img/user-logo.png";
import home from "../img/home.png";
import network from "../img/network.png";
import messages from "../img/chats.png";
import notifications from "../img/notifications.png";
import signOut from "../img/sign-out.png";
import { useContext } from "react";

const Navbar = () =>{
    const history = useNavigate();

    const handleItemCLick = (_route) =>{
        history(_route)
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        history('/')
    }

    return(
        <>
            <div className="navbar">

                <div className="navbar-item" onClick={() => handleItemCLick('/search')}>
                        <img src={search} alt="" />
                        <div>Search</div>
                </div>

                <div className="navbar-item" onClick={() => handleItemCLick('/profile')}>
                        <img src={logoUser} alt="" />
                        <div>Profile</div>
                </div>

                <div className="navbar-item" onClick={() => handleItemCLick('/home')}>
                        <img src={home} alt="" />
                        <div>Home</div>
                </div>

                <div className="navbar-item" onClick={() => handleItemCLick('/network')}>
                        <img src={network} alt="" />
                        <div>Network</div>
                </div>

                <div className="navbar-item" onClick={() => handleItemCLick('/messages')}>
                        <img src={messages} alt="" />
                        <div>Messages</div>
                </div>

                <div className="navbar-item" onClick={() => handleItemCLick('/notifications')}>
                        <img src={notifications} alt="" />
                        <div>Notifications</div>
                </div>

                <div className="navbar-item" onClick={() => handleLogout()}>
                        <img src={signOut} alt="" />
                        <div>Sign Out</div>
                </div>
            </div>
        </>
    )
}

export default Navbar;