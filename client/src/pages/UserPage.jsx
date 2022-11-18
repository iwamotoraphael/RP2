import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import SideProfile from "../components/SideProfile";
import Post from "../components/Post";

import "../css/pages/ProfilePage.css";
import '../css/pages/HomePage.css';
import { useParams } from "react-router-dom";
import { getUser } from "../services/api";

const jwt = require('jsonwebtoken');

const UserPage = () =>{
    const history = useNavigate();

    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)

    const params = useParams()

    const [user, setUser] = useState({})

    useEffect(() => {
        if(decodedToken.userId === params.id)
            history('/profile', {replace: true})
        getUser(params.id).then((u) =>{setUser(u.data); console.log(u)})
    }, [])

    return (
        <>
            <Header></Header>
            <div className="homepage-container profile-container">
                <SideProfile profile_name={user.nome} profile_pic={user.fotoPerfil} bio={user.bioDesc}></SideProfile>
                <div className="post-wrapper">

                    <Post post_name='Teste' post_date='2022-09-21' post_content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, aaaaaaaaaa' post_id={0}></Post>
                    <Post post_name='Teste' post_date='2022-09-21' post_content=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit,' post_id={0}></Post>
                    <Post post_name='Teste' post_date='2022-09-21' post_content=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit,' post_id={0}></Post>
                </div>
            </div>
        </>
    )
}

export default UserPage