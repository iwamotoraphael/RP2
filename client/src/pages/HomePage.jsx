import React, {useState} from "react";

import '../css/pages/HomePage.css'

import Header from "../components/Header";
import SideProfile from "../components/SideProfile";
import Post from "../components/Post";
import Button from "../components/Button";

const HomePage = () =>{

    const [post, setPost] = useState({user_id: localStorage.getItem('user'), content: '', date: ''})

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
                <SideProfile profile_name='Teste' profile_pic='https://i.scdn.co/image/ab6775700000ee8572d6997d9fef4932a4606253' bio='teste'></SideProfile>
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
                        </form>
                    </div>
                    <Post post_name='Teste' post_date='2022-09-21' post_content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, aaaaaaaaaa' post_id={0} isNgo={true} ></Post>
                    <Post post_name='Teste' post_date='2022-09-21' post_content=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit,' post_id={0}></Post>
                    <Post post_name='Teste' post_date='2022-09-21' post_content=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit,' post_id={0}></Post>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;