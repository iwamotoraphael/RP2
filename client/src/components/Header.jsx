import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import "../css/components/Header.css"

import logo from "../img/logo.png";
import search from "../img/search.png";

const Header = () =>{

    const history = useNavigate();

    const handleItemCLick = (_route) =>{
        history(_route)
    }

    return(
        <>
            <header>
                <img className="logo" src={logo} alt="Logo" />
                <h1 onClick={() => handleItemCLick('/home')}>WH</h1>
                <Navbar/>
            </header>
        </>
    )
}

export default Header;