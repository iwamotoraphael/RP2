import React from 'react'

import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Post from '../components/Post';

const PostPage = () => {
    const params = useParams()

    return (<>
        <Header></Header>
        <p>{JSON.stringify(params)}</p>
    </>);
}
 
export default PostPage;