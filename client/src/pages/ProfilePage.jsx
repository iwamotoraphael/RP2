import React, {useState} from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import SideProfile from "../components/SideProfile";
import Post from "../components/Post";

import "../css/pages/ProfilePage.css";
import '../css/pages/HomePage.css';

import { getUser, patchProfile } from "../services/api";


const ProfilePage = () =>{

    const user = JSON.parse(localStorage.getItem('user'))

    const [newBio, setNewBio] = useState('')

    const handleBioSubmit = async () => {
        try{
            if(newBio.length > 1){
                const patchProfileResponse = await patchProfile(user._id, {idUsuario: user._id ,bioDesc: newBio})
                if(patchProfileResponse.status === 200){
                    const fetchUser = await getUser(user._id)
                    localStorage.setItem('user', JSON.stringify(fetchUser.data))
                    setNewBio('')
                    document.getElementById('bio-text').value = ''
                }
            }
        }
        catch(e){
            console.log(e)
        }
    }

    const handleBioChange = (e) => {
        setNewBio(e.target.value)
    }

    return (
        <>
            <Header></Header>
            <div className="homepage-container profile-container">
                <SideProfile profile_name={user.nome} profile_pic={user.fotoPerfil} bio={user.bioDesc}></SideProfile>
                <div className="post-wrapper">

                    <div className="bio-profile">
                        Atualize sua bio aqui.
                        <textarea name="bio-text-area" onChange={handleBioChange} id="bio-text" cols="30" rows="10"></textarea>
                        <button onClick={() => {handleBioSubmit()}}>Atualizar</button>
                    </div>

                    <Post post_name='Teste' post_date='2022-09-21' post_content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, aaaaaaaaaa' post_id={0}></Post>
                    <Post post_name='Teste' post_date='2022-09-21' post_content=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit,' post_id={0}></Post>
                    <Post post_name='Teste' post_date='2022-09-21' post_content=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit,' post_id={0}></Post>
                </div>
            </div>
        </>
    )
}

export default ProfilePage