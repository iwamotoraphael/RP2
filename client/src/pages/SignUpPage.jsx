import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { useNavigate } from 'react-router-dom';

import UpBar from "../components/UpBar";
import Button from "../components/Button";
import Languages from '../components/Languages';

import "../css/pages/SignUpPage.css";

import undo from "../img/undo.png";

const SignUpPage = () => {
    const history = useNavigate();

    const [userform, setUserForm] = useState({languages: []})
    const [ngoform, setNgoForm] = useState({languages: []})
    const [language, setLanguage] = useState('')

    const [isUser, setIsUser] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        isUser ? console.log(userform) : console.log(ngoform)
    }

    const handleChange = (e) =>{
        isUser ? setUserForm({...userform, [e.target.name]: e.target.value}) : setNgoForm({...ngoform, [e.target.name]: e.target.value})
    }

    const handleLanguageChange = (e) =>{
        setLanguage(e.target.value)
    }

    const handleAddLanguage = (e) =>{
        if(language.length>0)
        {
            if(isUser){
                const newLanguages = [
                    ...userform.languages,{
                        name: language,
                        id: uuidv4(),
                    }
                ]
                
                setUserForm({...userform, ['languages'] : newLanguages})
            }
            else{
                const newLanguages = [
                ...ngoform.languages,{
                    name: language,
                    id: uuidv4(),
                }
                ]
            
                setNgoForm({...ngoform, ['languages'] : newLanguages})
            }
            
            setLanguage('')
        }
    }

    const handleRemoveLanguage = (language_id) =>{
        if(isUser){
            const newLanguages = userform.languages.filter(language => language.id !== language_id)
            setUserForm({...userform, ['languages'] : newLanguages})
        }
        else{
            const newLanguages = ngoform.languages.filter(language => language.id !== language_id)
            setNgoForm({...ngoform, ['languages'] : newLanguages})
        }
    }

    const handleSwitch = () =>{
        setIsUser(!isUser)
    }

    return ( 
        <>
            <UpBar/>
            <div className='signup-container'>
                
                <img className="undo-button" src={undo} alt="Go back button" onClick = {() => history(-1)} />

                {isUser ? (<h2>Sign Up as User</h2>) : (<h2>Sign Up as NGO</h2>)}
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <label htmlFor='userName'>Username:</label>
                        <input name="username" type="text" className='login_input' placeholder='Username' onChange={handleChange}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor='displayName'>Display name:</label>
                        <input name="displayName" type="text" className='login_input' placeholder='Display name' onChange={handleChange}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor='password'>Password:</label>
                        <input name = "password" type="password" className='login_input' placeholder='Password' onChange={handleChange}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor='confirmPassword'>Confirm password:</label>
                        <input name = "confirmPassword" type="password" className='login_input' placeholder='Confirm password' onChange={handleChange}></input>
                    </div>
                    {/* Person exclusive */}
                    {isUser && (
                        <div className="form-input">
                        <label htmlFor='originCountry'>Origin country:</label>
                        <input name = "originCountry" type="text" className='login_input' placeholder='Origin country' onChange={handleChange}></input>
                        </div>
                    )}

                    <div className="form-input">
                        <label htmlFor='languages'>Languages:</label>
                        <div className='language-input-container'>
                            <input value={language} name="languages" type="text" className='login_input' id='login_input_language' placeholder='Languages' onChange={handleLanguageChange}></input>
                        </div>
                        <div className='add-language-button-container'>
                            <button className='add-language-button' type='button' onClick={() => handleAddLanguage()}>+</button>
                        </div>
                    </div>
                    <Languages languages={isUser ? userform.languages : ngoform.languages} _onClick={handleRemoveLanguage}></Languages>
                    <Button onClick={handleSubmit}>Sign Up</Button>
                    <p>
                        <span className='switch-span' onClick={handleSwitch}> {isUser ? 'Registrate as a NGO' : 'Registrate as a person'}</span>
                    </p>
                </form> 
                
            </div>
        </>
    );
}
 
export default SignUpPage;