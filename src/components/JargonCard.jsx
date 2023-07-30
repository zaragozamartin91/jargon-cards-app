import React from 'react'
import './JargonCard.css'


export default class JargonCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        /** @type{string} */    const word = this.props.word
        /** @type{[string]} */  const translations = this.props.translations

        const cardInnerStyle = this.props.flipped ? { transform: 'rotateY(180deg)' } : {}

        console.log('jargon-card rendered!')

        return <div id='jargon-card' className="flip-card">
            <div className="flip-card-inner" onClick={() => this.props.onClick()} style={cardInnerStyle}>
                <div className="flip-card-front">
                    <h1>Swedish</h1>
                    <p>{word}</p>
                </div>
                <div className="flip-card-back">
                    <h1>English</h1>
                    {translations.map(t => <p>{t}</p>)}
                </div>
            </div>
        </div>
    }
}
