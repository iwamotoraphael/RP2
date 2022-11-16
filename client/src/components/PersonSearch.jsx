import React from 'react';

import '../css/components/PersonSearch.css'

const PersonSearch = ({id, name, originCountry, languages, onClickName}) => {
    return(<div className='person-search-container'>
        <p className="person-search-title">Name: </p>
        <div className='person-search-name' onClick={() => onClickName(id)}>{name}</div>
        <p className="person-search-title">Origin country: </p>
        <div className='person-search-country'>{originCountry}</div>
        <p className="person-search-title">Languages: </p>
        {languages.map((language) => 
            <div className='person-search-language'>{language}</div>
        )}
    </div>)
}

export default PersonSearch