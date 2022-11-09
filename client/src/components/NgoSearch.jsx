import React from 'react'

import '../css/components/NgoSearch.css'

const NgoSearch = ({id, name, languages, onClickName}) => {
    return(<div className='ngo-search-container'>
        <div className='ngo-search-name' onClick = {() => onClickName(id)}>{name}</div>
        {languages.map((language) => 
            <div className='ngo-search-language'>{language}</div>
        )}
    </div>)
}

export default NgoSearch