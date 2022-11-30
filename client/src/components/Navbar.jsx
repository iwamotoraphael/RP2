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

    const handleAddResponsiveness = () => {
        var x = document.getElementById("myTopNav");
        if (x.className === "navbar topnav") {
          x.className += " responsive";
        } else {
          x.className = "navbar topnav";
        }
    }

    return(
        <>
            <div className="navbar topnav" id="myTopNav">

                <div className="navbar-icon" onClick={() => handleAddResponsiveness()}>
                        <svg viewBox="0 0 100 80" width="40" height="40">
                                <rect width="100" height="20"></rect>
                                <rect y="30" width="100" height="20"></rect>
                                <rect y="60" width="100" height="20"></rect>
                        </svg>
                </div>

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