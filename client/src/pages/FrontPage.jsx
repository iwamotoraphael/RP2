import React from "react";
import UpBar from "../components/UpBar";
import Button from "../components/Button";

import "../css/FrontPage.css";
import { useNavigate } from "react-router-dom";

const FrontPage = () =>{
    const history = useNavigate();

    const handleLoginCLick = () =>{
        history('/login')
    }

    const handleSignUpClick = () =>{
        history('/signup')
    }

    return (
        <>
            <UpBar/>
            <div className="container">
                <p>WWHelp help é um site que dereguejonsons de bla bla bla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!</p>
                <div className="button_container">
                    <Button onClick={handleLoginCLick}>Login</Button>
                </div>
                <div className="button_container">
                    <Button onClick={handleSignUpClick}>Sign Up</Button>
                </div>
            </div>
        </>
    )
}

export default FrontPage