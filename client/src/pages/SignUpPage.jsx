import React, { useState } from 'react'

import UpBar from "../components/UpBar";
import Button from "../components/Button";

import "../css/pages/SignUpPage.css";

import undo from "../img/undo.png";

const SignUpPage = () => {

    const [userform, setUserForm] = useState({username: '', password: '', confirmPassword: '',})
    const [ngoform, setNgoForm] = useState({username: '', password: '', confirmPassword: '', languages: ''})

    const [isUser, setIsUser] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        isUser ? console.log(userform) : console.log(ngoform)
    }

    const handleChange = (e) =>{
        isUser ? setUserForm({...userform, [e.target.name]: e.target.value}) : setNgoForm({...ngoform, [e.target.name]: e.target.value})
    }

    const handleSwitch = () =>{
        setIsUser(!isUser)
    }

    return ( 
        <>
            <UpBar/>
            <div className='signup-container'>
                
                <a href="/">
                    <img className="undo-button" src={undo} alt="Go back button" />
                </a>

                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <label htmlFor='userName'>Username:</label>
                        <input name="username" type="text" className='login_input' placeholder='Username' onChange={handleChange}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor='password'>Password:</label>
                        <input name = "password" type="password" className='login_input' placeholder='Password' onChange={handleChange}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor='confirmPassword'>Confirm password:</label>
                        <input name = "confirmPassword" type="password" className='login_input' placeholder='Password' onChange={handleChange}></input>
                    </div>
                    {!isUser && (
                        <div className="form-input">
                        <label htmlFor='languages'>Languages:</label>
                        <input name = "languages" type="text" className='login_input' placeholder='Languages' onChange={handleChange}></input>
                        </div>
                    )}
                    <Button onClick={handleSubmit}>Sign Up</Button>
                    <p>
                        <span onClick={handleSwitch}> {isUser ? 'Registrate as a NGO' : 'Registrate as a person'}</span>
                    </p>
                </form>
                
            </div>
        </>
    );
}
 
export default SignUpPage;