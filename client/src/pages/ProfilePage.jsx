import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import SideProfile from "../components/SideProfile";
import Post from "../components/Post";
import Button from "../components/Button";

import "../css/pages/ProfilePage.css";
import '../css/pages/HomePage.css';

import { getUser, patchProfile, getUserPosts } from "../services/api";

const jwt = require('jsonwebtoken');

const ProfilePage = () =>{
    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)
    const [user, setUser] = useState({})
    const [newBio, setNewBio] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getUser(decodedToken.userId).then((u) =>{ setUser(u.data)})
        getUserPosts(decodedToken.userId).then((posts) => {setPosts(posts.data)})
    }, [])

    const handleBioSubmit = async () => {
        try{
            if(newBio.length > 1){
                const patchProfileResponse = await patchProfile(user._id, {idUsuario: user._id ,bioDesc: newBio}, JSON.parse(localStorage.getItem('user')).token)
                console.log(patchProfileResponse)
                if(patchProfileResponse.status === 200){
                    const fetchUser = await getUser(user._id)
                    setUser(fetchUser.data)
                    setNewBio('')
                    document.getElementById('bio-text').value = ''
                }
            }
        }
        catch(e){
            console.log(e)
        }
    }

    const handleBioChange = (e) => {
        setNewBio(e.target.value)
    }

    return (
        <>
            <Header></Header>
            <div className="homepage-container profile-container">
                <SideProfile profile_name={user.nome} profile_pic={user.fotoPerfil} bio={user.bioDesc}></SideProfile>
                <div className="post-wrapper">

                    <div className="bio-profile">
                        Update your bio here.
                        <textarea name="bio-text-area" onChange={handleBioChange} id="bio-text" cols="15" rows="5"></textarea>
                        <Button onClick={() => {handleBioSubmit()}}>Update</Button>
                    </div>

                    {posts.map((p) => <Post post_name={p.name} post_date = {p.createdAt} post_content = {p.post_content} post_id = {p._id} isNgo = {p.isngo}></Post>)}
                </div>
            </div>
        </>
    )
}

export default ProfilePage