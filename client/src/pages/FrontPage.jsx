import React from "react";
import UpBar from "../components/UpBar";
import Button from "../components/Button";

import "../css/pages/FrontPage.css";
import { useNavigate } from "react-router-dom";

import refugeeImg from "../img/refugee.png";


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
            <div className="container-frontpage">
                <div className="content-container">
                    <h2 className="title-frontpage">Welcome to WWHelp.</h2>
                    <p className="description-frontpage">WWHelp help é um site que dereguejonsons de bla bla bla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!</p>
                    <div className="button_container">
                        <Button onClick={handleLoginCLick}>Login</Button>
                    </div>
                    <div className="button_container">
                        <Button onClick={handleSignUpClick}>Sign Up</Button>
                    </div>
                </div>
                <img src={refugeeImg} alt=""/>

            </div>
        </>
    )
}

export default FrontPage