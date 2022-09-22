import React from 'react';

import Post from './Post';

const Posts = ({posts}) => {
    return (posts.map(post => <Post post_name={post.post_name} post_date={post.post_date} post_content={post.post_content} post_id={post.post_id}></Post>));
}
 
export default Posts;