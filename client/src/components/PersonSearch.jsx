import React from 'react';

import '../css/components/PersonSearch.css'

const PersonSearch = ({id, name, originCountry, languages, onClickName}) => {
    return(<div className='person-search-container'>
        <div className='person-search-name' onClick={() => onClickName(id)}>{name}</div>
        <div className='person-search-country'>{originCountry}</div>
        {languages.map((language) => 
            <div className='person-search-language'>{language}</div>
        )}
    </div>)
}

export default PersonSearch