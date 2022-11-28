import React, {useState, useEffect} from "react";

import '../css/pages/HomePage.css'

import Header from "../components/Header";
import SideProfile from "../components/SideProfile";
import Post from "../components/Post";
import Button from "../components/Button";
import { getTimeline, getUser, postCreatePost } from "../services/api";

const jwt = require('jsonwebtoken');

const HomePage = () =>{
    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)

    const [user, setUser] = useState({})

    const [post, setPost] = useState('')

    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        getUser(decodedToken.userId).then((u) =>{setUser(u.data)})
        getTimeline(decodedToken.userId).then((t) => {setTimeline(t.data)})
    }, [])

    const handleSubmitPost = async () => {
        if(post.length > 0){
            console.log(post)
            console.log(user.nome)
            const response = await postCreatePost(decodedToken.userId, post, user.nome, user.email !== undefined)
            console.log(response)
            if(response.data.status === 200){
                document.getElementById('content-text').value = ''
            }
        }
    }

    const handleChange = (e) => {
        setPost(document.getElementById("content-text").value)
    }

    return (
        <div className="homepage">
            <Header/>
            <div className="homepage-container">
                <SideProfile profile_name={user.nome} profile_pic={user.fotoPerfil} bio={user.bioDesc}></SideProfile>
                <div className="post-wrapper">
                    <div className="post-form-wrapper">
                        <div className="form-input">
                            <label htmlFor='content'/>
                            <textarea 
                                id="content-text"
                                name="content" 
                                cols="40" rows="5" 
                                className='post_input' 
                                maxLength={2000} 
                                placeholder='How can WeHelp? (2000 characters)'
                                onChange={handleChange}>
                                </textarea>
                        </div>

                        <Button onClick={() => {handleSubmitPost()}}>Submit</Button>
                    </div>
                    {timeline.map((p) => p?<Post post_name = {p.name} post_date = {p.createdAt} post_content = {p.post_content} post_id = {p._id} isNgo = {p.isNgo}></Post> : <></>)}
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;