import React from 'react';
import Button from './Button';

const Language = ({language, _onClick}) => {
    return(<>
        <p className='language-name' key={language.id}>{language.name}</p>
        <button type='button' className='remove-language-button' onClick={() => _onClick(language.id)}>X</button>
    </>
    );
}
 
export default Language;