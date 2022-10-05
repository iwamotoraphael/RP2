import React from 'react'
import Language from './Language';

const Languages = ({languages, _onClick}) => {
    return (<>
        {languages.map((language, index) => <Language _onClick={() => _onClick()} language={language} id={index}></Language>)}
    </>);
}
 
export default Languages;