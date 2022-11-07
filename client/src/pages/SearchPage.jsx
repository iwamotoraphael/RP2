import React, {useState} from 'react';
import Language from '../components/Language';
import Header from '../components/Header';
import Button from '../components/Button';
import {Formik, Field, Form, FieldArray} from 'formik'

import languages_list from '../data/languages';

import '../css/pages/SearchPage.css'

const lookup = require('country-code-lookup')

const SearchPage = () => {
    
    const [ngos, setNgos] = useState({})
    const [persons, setPersons] = useState({})

    const [searchNGO, setSearchNGO] = useState(false)

    const searchInitialValues = {
        name: '',
        originCountry: '',
        languages: [],
    }

    const handleNgoSearch = (values) => {
        console.log('ngo search')
        console.log(values)
    }

    const handlePersonSearch = (values) => {
        console.log('person search')
        console.log(values)
    }

    const handleSwitchMode = () => {
        setSearchNGO(!searchNGO)
    }

    return(<>
        <Header></Header>
        <div className='filters-container'>
            <h1>Searching for {searchNGO ? 'NGO' : 'person'}</h1>
            <Formik initialValues={searchInitialValues} onSubmit={values => searchNGO ? handleNgoSearch(values) : handlePersonSearch(values)}>
                <Form>
                    <div className="search-input">
                        <label htmlFor='name'>Name:</label>
                        <Field name="name" type="text" className='search-input' placeholder='Name' />
                    </div>

                    <div className="search-input">
                        {searchNGO ? <label htmlFor='originCountry'>Country:</label> : <label htmlFor='originCountry'>Origin country:</label>}
                        <Field as='select' name = "originCountry" className='search-input' placeholder='Origin country' id='select-country-search'>
                            <option value="" selected>Select a country</option>
                            {lookup.countries.map((data) => <option value={data.country}>{data.country}</option>)}
                        </Field>
                    </div>

                    <div className="search-input">
                        <label htmlFor='languages'>Languages:</label>

                        <FieldArray name='languages'>
                            {
                                (fieldArrayProps) => {
                                    const {push, remove, form} = fieldArrayProps
                                    const {values} = form
                                    const {languages} = values

                                    return (
                                    <>
                                        <div className='search-language-input-container'>
                                        <Field as='select' name = "language" className='search-input' placeholder='Languages' id='search-select-language'>
                                            <option value="" selected>Select a Language</option>
                                            {languages_list.map((language) => <option value={language.name+', '+language.nativeName}>{language.name}, {language.nativeName}</option>)}
                                        </Field>
                                        
                                        <div className='search-add-language-button-container'>
                                            <button className='search-add-language-button' type='button' onClick={() => {if(!languages.includes(document.getElementById('search-select-language').value) && document.getElementById('search-select-language').value.length>0) push(document.getElementById('search-select-language').value)}}>+</button>
                                        </div>
                                        </div>

                                        {languages.map((language, index) => <Language _onClick={() => remove()} language={language} id={index}/>)}
                                    </>
                                    )
                                }
                            }
                        </FieldArray>
                    </div>

                    <Button type='button'>Search</Button>
                </Form>
            </Formik>
        </div>
        {searchNGO ? 
            <div className='swap-mode-container' onClick={() => {handleSwitchMode()}}>Search for a person</div>
        :
            <div className='swap-mode-container' onClick={() => {handleSwitchMode()}}>Search for an NGO</div>
        }


    </>)
}

export default SearchPage