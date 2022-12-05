import React from 'react'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import "../css/pages/PostPage.css";

import Header from '../components/Header';
import Post from '../components/Post';
import SideProfile from '../components/SideProfile';
import CommentarySection from '../components/CommentarySection'
import { getPost, getUser } from '../services/api';

const jwt = require('jsonwebtoken');

const PostPage = () => {
    const params = useParams()
    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)

    const [post, setPost] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        getPost(params.postid).then((p) => {setPost(p.data)})
    }, [])

    useEffect(() => {
        if(post._id !== undefined){
            getUser(post.idusuario).then((u) => {setUser(u.data)})
        }
    }, [post])

    return (<>
        <Header></Header>
        <div className='post-page-wrapper'>
            <div className='top-post-page-wrapper'>
                <Post post_name={post.name} post_date={post.createdAt} post_content={post.post_content} post_id={post._id} isNgo={post.isngo} ></Post>
                <SideProfile profile_name={user.nome} profile_pic={user.fotoPerfil} bio={user.bioDesc}></SideProfile>
            </div>
            {post._id !== undefined ? <CommentarySection commentaryUser={decodedToken.userId} postId={post._id}></CommentarySection> : <></>}
        </div>
    </>);
}
 
export default PostPage;