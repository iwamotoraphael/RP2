import React from 'react'
import Language from './Language';

const Languages = ({languages, _onClick}) => {
    return (<>
        {languages.map(language => <Language _onClick={_onClick} language={language}></Language>)}
    </>);
}
 
export default Languages;