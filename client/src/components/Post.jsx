import React from 'react';

import '../css/components/Post.css'

import { useNavigate } from 'react-router-dom';



const Post = ({post_name, post_date, post_content, post_id}) => {
    
    const history = useNavigate()

    const handlePostClick = ()=>{
        history(`/post/${post_id}`)
    }

    return (<div className='post' onClick={() => handlePostClick()}>
        <p className='post-name'>{post_name}</p>
        <p className='post-date'>{post_date}</p>
        <p className='post-content'>{post_content}</p>
    </div>);
}
 
export default Post;