import React, {useState, useEffect} from "react";

import '../css/pages/HomePage.css'

import Header from "../components/Header";
import SideProfile from "../components/SideProfile";
import Post from "../components/Post";
import Button from "../components/Button";
import { getTimeline, getUser } from "../services/api";

const jwt = require('jsonwebtoken');

const HomePage = () =>{
    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)

    const [user, setUser] = useState({})

    const [post, setPost] = useState({user_id: decodedToken.userId, content: '', date: ''})

    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        getUser(decodedToken.userId).then((u) =>{ setUser(u.data)})
        getTimeline(decodedToken.userId).then((t) => {setTimeline(t.data)})
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(post.content)
    }

    const handleChange = (e) => {
        setPost({...post, [e.target.name] : e.target.value})
    }

    return (
        <div className="homepage">
            <Header/>
            <div className="homepage-container">
                <SideProfile profile_name={user.nome} profile_pic={user.fotoPerfil} bio={user.bioDesc}></SideProfile>
                <div className="post-wrapper">
                    <div className="post-form-wrapper">
                        <form>
                            <div className="form-input">
                                <label htmlFor='content'/>
                                <textarea 
                                    name="content" 
                                    cols="40" rows="5" 
                                    className='post_input' 
                                    maxLength={2000} 
                                    placeholder='How can WeHelp? (2000 characters)'
                                    onChange={handleChange}></textarea>
                            </div>

                            <Button onClick={handleSubmit}>Submit</Button>

                            {timeline.map((p) => p?<Post post_name = 'a' post_date = '' post_content = '' post_id = '' isNgo = {false}></Post> : <></>)}
                        </form>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;