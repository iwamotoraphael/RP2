import React from "react";
import { useState, useEffect } from "react";
import Friend from "../components/Friend";
import Header from "../components/Header";

import '../css/pages/NetworkPage.css'
import { getNetworkData } from "../services/api";

const jwt = require('jsonwebtoken');

const NetworkPage = () =>{
    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)

    const [friends, setFriends] = useState([])

    useEffect(() => {
        getNetworkData(decodedToken.userId).then((n) => {setFriends(n.data.amigos)})
    }, [])

    return (
        <>
            <Header/>
            <div className="networkpage-container">
                <div className="network-container">
                    <h2 className="network-title">Your friends</h2>
                    <div className="friends-container">
                        {friends.map((f) => <Friend profile_id={f}></Friend>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NetworkPage;