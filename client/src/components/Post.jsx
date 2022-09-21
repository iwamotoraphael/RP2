import React from 'react';

import '../css/components/Post.css'

const Post = ({post_name, post_date, post_content}) => {
    return (<div className='post'>
        <p className='post-name'>{post_name}</p>
        <p className='post-date'>{post_date}</p>
        <p className='post-content'>{post_content}</p>
    </div>);
}
 
export default Post;