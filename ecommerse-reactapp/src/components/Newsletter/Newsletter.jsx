import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import "../Newsletter/newsletter.css"

const Newsletter = () => {
    return (
        <div className='Newletter'>
            <h1 className="newsTitle">Newsletter</h1>
            <div className="newsDescription">Get timely updates from your favorite product.</div>
            <div className="inputContainer">
                <input type="text" className="newsInput" name='newsInput' placeholder='Your email' />
                <div className="newsButton">
                <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
        </div>
    )
}

export default Newsletter