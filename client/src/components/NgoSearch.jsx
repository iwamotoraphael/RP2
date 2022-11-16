import React from 'react'

import '../css/components/NgoSearch.css'

const NgoSearch = ({id, name, languages, onClickName}) => {
    return(<div className='ngo-search-container'>
        <p className="person-search-title">Name: </p>
        <div className='ngo-search-name' onClick = {() => onClickName(id)}>{name}</div>
        <p className="person-search-title">Languages: </p>
        {languages.map((language) => 
            <div className='ngo-search-language'>{language}</div>
        )}
    </div>)
}

export default NgoSearch