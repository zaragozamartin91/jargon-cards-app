import React from 'react'
import JargonCard from './JargonCard'
import ContentContainer from './ContentContainer'
import Random from '../utils/Random'


export default class JargonCardDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { word: '', translations: [], cardFlipped: false }
    }

    render() {
        const { word, translations } = this.state

        return <ContentContainer>
            <button onClick={() => this.generateCard()}>Generate card</button>
            <div id='jargon-card-container'>
                <JargonCard
                    word={word}
                    translations={translations}
                    flipped={this.state.cardFlipped}
                    onClick={() => this.flipCard()} />
            </div>
        </ContentContainer>
    }

    async generateCard() {
        try {
            const dictionary = await fetch('swe-eng.json')
            /** @type{Array} */ const terms = await dictionary.json()
            const idx = new Random().integer(terms.length)
            const { w, t } = terms[idx]
            this.setState({ word: w, translations: t, cardFlipped: false })
        } catch (error) {
            alert('Unexpected error while fetching dictionary')
            console.error(error)
        }
    }

    flipCard() {
        console.log('Jargon card is being flipped!')
        this.setState({ cardFlipped: true })
    }
}
