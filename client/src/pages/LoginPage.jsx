import React, { useState } from 'react'

import UpBar from "../components/UpBar";
import Button from "../components/Button";

import "../css/LoginPage.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

import undo from "../img/undo.png";

const LoginPage = () => {
    const [form, setForm] = useState({username: '', password: '',})

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(form)
    }

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <>
            <UpBar/>
            <div className='login-container'>

                <Link to="/">
                    <img className="undo-button" src={undo} alt="Go back button" />
                </Link>

                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <label htmlFor='userName'>Username:</label>
                        <input name="username" type="text" className='login_input' placeholder='Username' onChange={handleChange}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor='password'>Password:</label>
                        <input name = "password" type="password" className='login_input' placeholder='Password' onChange={handleChange}></input>
                    </div>
                    <Button onClick={handleSubmit}>Login</Button>
                </form>
                
            </div>
        </>
      );
}
 
export default LoginPage;