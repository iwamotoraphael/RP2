import React from 'react'

import '../css/components/Message.css'

const Message = ({isOwner, text}) => {
    return(
        <div className={isOwner ? 'sent-message':'received-message'}>
            {text}
        </div>
    )
}

export default Message