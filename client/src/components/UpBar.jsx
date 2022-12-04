import React from "react";
import "../css/components/UpBar.css"

import logo from "../img/logo.png";

const UpBar = () =>{

    return(
        <>
            <nav className="up-bar_background">
                <img className="logo" src={logo} alt="Logo" />
                <h1>WeHelp</h1>
            </nav>
        </>
    )
}

export default UpBar