import React from "react";
import "../css/UpBar.css"

import logo from "../img/logo.png";

const UpBar = () =>{

    return(
        <>
            <nav className="up-bar_background">
                <img src={logo} alt="Logo" />
                <h1>WWHelp</h1>
            </nav>
        </>
    )
}

export default UpBar