import React from 'react'
import './ContentContainer.css'

/** Covers all screen and centers all content using flex */
export default function ContentContainer(props) {
    return (
        <div className='contentContainer'>
            {/* You can render any content or components here */}
            {props.children}
        </div>
    )
}
