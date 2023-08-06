import React from 'react'
import JargonCard from './JargonCard'
import ContentContainer from './ContentContainer'
import Random from '../utils/Random'
import Lazy from "../utils/Lazy"
import './JargonCardDemo.css'

const TERMS = new Lazy(async () => {
    console.log('Fetching dictionary')
    return fetch('swe-eng.json').then(dictionary => dictionary.json())
})

export default class JargonCardDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { word: '', translations: [], cardFlipped: false }
    }

    render() {
        const { word, translations } = this.state

        return <ContentContainer>
            <button className='generateCardButton' onClick={() => this.generateCard()}>Generate card</button>
            <JargonCard
                word={word}
                translations={translations}
                flipped={this.state.cardFlipped}
                onClick={() => this.flipCard()} />
        </ContentContainer>
    }

    async generateCard() {
        try {
            const terms = await TERMS.value
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
        const cardFlipped = !this.state.cardFlipped
        this.setState({ cardFlipped })
    }
}
