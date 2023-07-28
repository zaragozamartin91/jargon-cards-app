import React from 'react'
import './JargonCard.css'


export default class JargonCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h1>Pepe argento</h1>
                    <p>Shoe salesman</p>
                    <p>He is papucho</p>
                </div>
                <div className="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
    }
}
