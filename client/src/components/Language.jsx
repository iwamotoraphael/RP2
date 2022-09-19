import React from 'react';

import '../css/components/Language.css'

const Language = ({language, _onClick}) => {
    return(<div className='language-container'>
        <p className='language-name' key={language.id}>{language.name}</p>
        <button type='button' className='remove-language-button' onClick={() => _onClick(language.id)}>X</button>
    </div>
    );
}
 
export default Language;