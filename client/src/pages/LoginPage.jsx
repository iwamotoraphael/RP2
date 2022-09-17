import React, { useState } from 'react'

import UpBar from "../components/UpBar";
import Button from "../components/Button";

import "../css/LoginPage.css";

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
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='userName'>Username:</label>
                    <input name="username" type="text" className='login_input' placeholder='Username' onChange={handleChange}></input>
                    <label htmlFor='password'>Password:</label>
                    <input name = "password" type="password" className='login_input' placeholder='Password' onChange={handleChange}></input>
                    <Button onClick={handleSubmit}>Login</Button>
                </form>
                
            </div>
        </>
      );
}
 
export default LoginPage;