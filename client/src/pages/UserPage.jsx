import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import Header from "../components/Header";
import SideProfile from "../components/SideProfile";
import Post from "../components/Post";
import Button from "../components/Button";

import "../css/pages/ProfilePage.css";
import '../css/pages/HomePage.css';
import { useParams } from "react-router-dom";
import { deleteRemoveFriend, deleteRemoveFriendRequest, getNetworkData, getUser, getUserPost, getUserPosts, postSendFriendRequest } from "../services/api";

const jwt = require('jsonwebtoken');

const UserPage = () =>{
    const history = useNavigate();

    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)

    const params = useParams()

    const [user, setUser] = useState({})
    const [network, setNetwork] = useState({})
    const [button, setButton] = useState(<Button>loading</Button>)
    const [posts, setPosts] = useState([])

    useEffect(() => {
            if(decodedToken.userId === params.id)
                history('/profile', {replace: true})
            getUser(params.id).then((u) =>{setUser(u.data);})
            getNetworkData(decodedToken.userId).then((n) => {setNetwork(n.data)})
            getUserPosts(params.id).then((posts) => {setPosts(posts.data)})
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
            const response = await postSendFriendRequest(params.id, decodedToken.userId)

            getNetworkData(decodedToken.userId).then((n) => {setNetwork(n.data)})

            return response
        }
        catch(err){
            console.log(err)
        }
    }

    const handleRemoveFriend = async () => {
        try{
            const response = await deleteRemoveFriend(params.id, decodedToken.userId)

            getNetworkData(decodedToken.userId).then((n) => {setNetwork(n.data)})

            return response
        }
        catch(err){
            console.log(err)
        }
    }

    const handleRemoveRequest = async () => {
        try{
            const response = await deleteRemoveFriendRequest(params.id, decodedToken.userId)

            getNetworkData(decodedToken.userId).then((n) => {setNetwork(n.data)})

            return response
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
                    {posts.map((p) => <Post post_name = {p.name} post_date = {p.createdAt} post_content = {p.post_content} post_id = {p._id} isNgo = {p.isngo}></Post>)}
                </div>
            </div>
        </>
    )
}

export default UserPage