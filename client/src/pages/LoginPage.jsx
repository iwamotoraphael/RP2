import React, { useState, useContext } from 'react'
import { Navigate, useNavigate } from "react-router-dom";

import UpBar from "../components/UpBar";
import Button from "../components/Button";

import "../css/pages/LoginPage.css";

import undo from "../img/undo.png";
import { postLogin } from '../services/api';


const LoginPage = () => {
    const history = useNavigate();

    const [form, setForm] = useState({username: '', password: '',})

    const [error_message, setError] = useState('')

    const handleSubmit = async (e) => {
        try{
            e.preventDefault()
            const res = await postLogin(form.username, form.password)
            localStorage.setItem('user', JSON.stringify(res.data._id))
            history('/home')
        }
        catch(err){
            setError(err.request.response)
        }
    }

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <>
            <UpBar/>
            <div className='login-container'>

                <img className="undo-button" src={undo} alt="Go back button" onClick = {() => history(-1)}/>

                <h2>Login</h2>
                <p className='error'>{error_message}</p>
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