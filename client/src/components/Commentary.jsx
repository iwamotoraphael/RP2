import React from "react";

import '../css/components/Commentary.css'

import logoUser from "../img/user-logo.png";
import logoNGO from "../img/ngo-logo.png";

const Commentary = ({commentary_name, commentary_date, commentary_content, isNgo}) => {
    return(
    <div className="commentary" id={isNgo ? "post-ngo" : "post-person"}>
        <div className="commentary-wrapper">
            <div className='wrapper-commentary-image'>
                {isNgo ? <img src={logoNGO} alt="NGO's Logo" /> : <img src={logoUser} alt="User's Logo" />}
            </div>
            <div className='wrapper-commentary-text'>
                <p className='commentary-name'>{commentary_name}</p>
                <p className='commentary-date'>{commentary_date}</p>
                <p className='commentary-content'>{commentary_content}</p>
            </div>
        </div>
    </div>
    )
}

export default Commentary