import React from 'react';

import '../css/components/Post.css'

import { useNavigate } from 'react-router-dom';

import logoUser from "../img/user-logo.png";
import logoNGO from "../img/ngo-logo.png";

const Post = ({post_name, post_date, post_content, post_id, isNgo}) => {
    
    const history = useNavigate()

    const handlePostClick = ()=>{
        history(`/post/${post_id}`)
    }

    return (<div className="post" id={isNgo ? "post-ngo" : "post-person"}>
        <div className='wrapper-post'>
            <div className='wrapper-post-image'>
                {isNgo ? <img src={logoNGO} alt="NGO's Logo" /> : <img src={logoUser} alt="User's Logo" />}
            </div>
            <div className='wrapper-post-text'>
                <p className='post-name' onClick={() => handlePostClick()}>{post_name}</p>
                <p className='post-date'>{post_date}</p>
                <p className='post-content'>{post_content}</p>
            </div>
        </div>
    </div>);
}
 
export default Post;