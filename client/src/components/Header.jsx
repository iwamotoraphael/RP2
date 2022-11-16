import React from "react";
import Navbar from "../components/Navbar";

import "../css/components/Header.css"

import logo from "../img/logo.png";
import search from "../img/search.png";

const Header = () =>{

    return(
        <>
            <header>
                <img className="logo" src={logo} alt="Logo" />
                <h1>WH</h1>
                <Navbar/>
            </header>
        </>
    )
}

export default Header;