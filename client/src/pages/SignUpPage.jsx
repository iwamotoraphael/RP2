import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Formik, Field, Form, FieldArray} from 'formik'
import * as Yup from 'yup'

import { postNgoSignup, postPersonSignup } from '../services/api';

import UpBar from "../components/UpBar";
import Button from "../components/Button";
import Language from '../components/Language';

import languages_list from '../data/languages';

import "../css/pages/SignUpPage.css";

import undo from "../img/undo.png";

const lookup = require('country-code-lookup')

//validation schemas
const personSchema = Yup.object().shape({
    username: Yup.string().min(6, 'Username must have at least 6 characters').required('Username is a required field'),
    displayName: Yup.string().min(4, 'Display name must have at least 4 characters').required('Display name is a required field'),
    password: Yup.string().min(8, 'Your password must have at least 8 characters, an uppercase letter, an lowercase letter and a number').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Your password must have an uppercase letter, an lowercase letter and a number').required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required(),
    originCountry: Yup.string().required('Origin country is a required field'),
    languages: Yup.array().min(1, 'Must select at least one language'),
})

const ngoSchema = Yup.object().shape({
    username: Yup.string().min(6, 'Username must have at least 6 characters').required('Username is a required field'),
    displayName: Yup.string().min(4, 'Display name must have at least 4 characters').required('Display name is a required field'),
    password: Yup.string().min(8, 'Your password must have at least 8 characters, an uppercase letter, an lowercase letter and a number').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Your password must have an uppercase letter, an lowercase letter and a number').required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required(),
    originCountry: Yup.string().required('Origin country is a required field'),
    address: Yup.string().required('Address is a required field'),
    email: Yup.string().email('Email must be a valid email').required('Email is a required field'),
    languages: Yup.array().min(1, 'Must select at least one language'),
})

const SignUpPage = () => {
    const history = useNavigate();

    const [isUser, setIsUser] = useState(true);

    const handleSwitch = () =>{
        setIsUser(!isUser)
    }

    const handleSubmit = async (values)=>{
        console.log(values)
    }

    const userInitialValues = {
        username: '',
        displayName: '',
        password: '',
        confirmPassword: '',
        originCountry: '',
        languages: [],
    }

    const ngoInitialValues = {
        username: '',
        displayName: '',
        password: '',
        confirmPassword: '',
        originCountry: '',
        address: '',
        email: '',
        languages: [],
    }

    return ( 
        <>
            <UpBar/>
            <div className='signup-container'>
                
                <img className="undo-button" src={undo} alt="Go back button" onClick = {() => history(-1)} />

                {isUser ? (<h2>Sign Up as Person</h2>) : (<h2>Sign Up as NGO</h2>)}
    
                <Formik initialValues={isUser ? userInitialValues : ngoInitialValues} 
                validationSchema = {isUser ? personSchema : ngoSchema}
                onSubmit={values => handleSubmit(values)}>
                    {( {errors} )=> (
                        <Form>
                            <div className="form-input">
                                <label htmlFor='userName'>Username:</label>
                                <Field name="username" type="text" className='login_input' placeholder='Username' />
                                <div className = 'error-message'>{errors.username}</div>
                            </div>
                            <div className="form-input">
                                <label htmlFor='displayName'>Display name:</label>
                                <Field name="displayName" type="text" className='login_input' placeholder='Display name' />
                                <div className = 'error-message'>{errors.displayName}</div>
                            </div>
                            <div className="form-input">
                                <label htmlFor='password'>Password:</label>
                                <Field name = "password" type="password" className='login_input' placeholder='Password' />
                                <div className = 'error-message'>{errors.password}</div>
                            </div>
                            <div className="form-input">
                                <label htmlFor='confirmPassword'>Confirm password:</label>
                                <Field name = "confirmPassword" type="password" className='login_input' placeholder='Confirm password' />
                                <div className = 'error-message'>{errors.confirmPassword}</div>
                            </div>
                            
                            <div className="form-input">
                                {isUser ? <label htmlFor='originCountry'>Origin country:</label> : <label htmlFor='originCountry'>Country:</label>}
                                <Field as='select' name = "originCountry" className='login_input' placeholder='Origin country' id='select-country'>
                                    <option value="" selected>Select a country</option>
                                    {lookup.countries.map((data) => <option value={data.country}>{data.country}</option>)}
                                </Field>
                                <div className = 'error-message'>{errors.originCountry}</div>
                            </div>  

                            {/*==================NGO exclusive=================*/}
                            {!isUser && (<>
                                <div className="form-input">
                                    <label htmlFor='address'>Address:</label>
                                    <Field name = "address" type="text" className='login_input' placeholder='Address' />
                                    <div className = 'error-message'>{errors.address}</div>
                                </div>
                            

                                <div className="form-input">
                                    <label htmlFor='email'>E-mail:</label>
                                    <Field name = "email" type="text" className='login_input' placeholder='E-mail' />
                                    <div className = 'error-message'>{errors.email}</div>
                                </div>
                                </>
                            )}
                            {/*==================NGO exclusive=================*/}
                            
                            <div className="form-input">
                                <label htmlFor='languages'>Languages:</label>

                                <FieldArray name='languages'>
                                    {
                                        (fieldArrayProps) => {
                                            const {push, remove, form} = fieldArrayProps
                                            const {values} = form
                                            const {languages} = values

                                            return (
                                            <>
                                                <div className='language-input-container'>
                                                <Field as='select' name = "language" className='login_input' placeholder='Languages' id='select-language'>
                                                    <option value="" selected>Select a Language</option>
                                                    {languages_list.map((language) => <option value={language.name+', '+language.nativeName}>{language.name}, {language.nativeName}</option>)}
                                                </Field>
                                                
                                                <div className='add-language-button-container'>
                                                    <button className='add-language-button' type='button' onClick={() => {if(!languages.includes(document.getElementById('select-language').value) && document.getElementById('select-language').value.length>0) push(document.getElementById('select-language').value)}}>+</button>
                                                </div>
                                                </div>

                                                {languages.map((language, index) => <Language _onClick={() => remove()} language={language} id={index}/>)}
                                            </>
                                            )
                                        }
                                    }
                                </FieldArray>

                                <div className = 'error-message'>{errors.languages}</div>
                            </div>

                            <Button type='button' onClick={() => handleSubmit}>Sign Up</Button>
                        </Form>
                    )}
                </Formik>

                <p>
                    <span className='switch-span' onClick={handleSwitch}> {isUser ? 'Registrate as a NGO' : 'Registrate as a person'}</span>
                </p>
            </div>
        </>
    );
}
 
export default SignUpPage;