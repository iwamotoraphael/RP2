import React from 'react';

import '../css/components/Language.css'

const Language = ({language, id, _onClick}) => {
    return(<div className='language-container'>
        <p className='language-name' key={id}>{language}</p>
        <button type='button' className='remove-language-button' onClick={() => _onClick(id)}>X</button>
    </div>
    );
}
 
export default Language;