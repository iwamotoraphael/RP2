import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import SideProfile from "../components/SideProfile";
import Post from "../components/Post";
import Button from "../components/Button";

import "../css/pages/ProfilePage.css";
import '../css/pages/HomePage.css';
import { useParams } from "react-router-dom";
import { deleteRemoveFriend, deleteRemoveFriendRequest, getNetworkData, getUser, postSendFriendRequest } from "../services/api";

const jwt = require('jsonwebtoken');

const UserPage = () =>{
    const history = useNavigate();

    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)

    const params = useParams()

    const [user, setUser] = useState({})
    const [network, setNetwork] = useState({})
    const [button, setButton] = useState(<>loading</>)

    useEffect(async () => {
        if(decodedToken.userId === params.id)
            history('/profile', {replace: true})
        getUser(params.id).then((u) =>{setUser(u.data);})
        getNetworkData(decodedToken.userId).then((n) => {setNetwork(n.data)})
    }, [])

    useEffect(() => {
        if(network._id != undefined){
            if(network.amigos.includes(params.id))
                setButton(<Button onClick={() => {handleRemoveFriend()}}>Remove Friend</Button>)
            else if(network.solicitacoes_enviadas.includes(params.id))
                setButton(<Button onClick={() => {handleRemoveRequest()}}>Remove Friend Request</Button>)
            else
                setButton(<Button onClick={() => {handleAddFriend()}}>Add Friend</Button>)
        }
    }, [network])

    const handleAddFriend = async () => {
        try{
            return await postSendFriendRequest(params.id, decodedToken.userId)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleRemoveFriend = async () => {
        try{
            return await deleteRemoveFriend(params.id, decodedToken.userId)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleRemoveRequest = async () => {
        try{
            return await deleteRemoveFriendRequest(params.id, decodedToken.userId)
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <Header></Header>
            <div className="homepage-container profile-container">
                <div className="user-left-container">
                    <SideProfile profile_name={user.nome} profile_pic={user.fotoPerfil} bio={user.bioDesc}></SideProfile>
                    {button}
                </div>
                
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