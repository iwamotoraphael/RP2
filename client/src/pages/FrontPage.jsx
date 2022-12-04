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
                    <h2 className="title-frontpage">Welcome to WeHelp.</h2>
                    <p className="description-frontpage">WeHelp is a website that enables the communication and connection between immigrants, refugees and NGOs. It was designed and developed by a group of students at the University of São Paulo (USP), when they identified the need for immigrants and refugees to get support from each other, as well as obtaining specialized assistance from NGOs, that can share useful content regarding the adjustment of life in a new country. We strive for NGOs, refugees and immigrants to have the best possible communication with each other, so that both sides have their interests fulfilled and satisfied. Are you an NGO willing to help? Or a refugee/immigrant willing to be helped? Don't waste time and sign up!</p>
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