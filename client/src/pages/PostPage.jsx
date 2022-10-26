import React from 'react'

import { useParams } from 'react-router-dom';

import "../css/pages/PostPage.css";

import Header from '../components/Header';
import Post from '../components/Post';
import SideProfile from '../components/SideProfile';
import CommentarySection from '../components/CommentarySection'

const PostPage = () => {
    const params = useParams()

    return (<>
        <Header></Header>
        <div className='post-page-wrapper'>
            <div className='top-post-page-wrapper'>
                <Post post_name='Teste' post_date='2022-09-21' post_content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, aaaaaaaaaa' post_id={0} isNgo={true} ></Post>
                <SideProfile profile_name='Teste' profile_pic='https://i.scdn.co/image/ab6775700000ee8572d6997d9fef4932a4606253' bio='teste'></SideProfile>
            </div>
            <CommentarySection></CommentarySection>
        </div>
        <p>{JSON.stringify(params)}</p>
    </>);
}
 
export default PostPage;