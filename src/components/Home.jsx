import React from 'react'
import FirebaseFacade from "../integrations/FirebaseFacade"
import ContentContainer from './ContentContainer'


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { sampleQueryResults: [] }
    }

    render() {
        const queryResults = this.state.sampleQueryResults.map((qr, idx) => <li key={idx}>{qr}</li>)
        return <ContentContainer>
            <button onClick={this.runSampleQuery.bind(this)}>Run sample query</button>
            <ul>
                {queryResults}
            </ul>
        </ContentContainer>
    }

    async runSampleQuery() {
        const firebaseFacade = FirebaseFacade.getDefault()
        const querySnapshot = await firebaseFacade.sampleQuery()
        const queryResults = []
        querySnapshot.forEach((doc) => {
            const result = JSON.stringify(doc.data())
            console.log(`${doc.id} => ${result}`)
            queryResults.push(result)
        })

        this.setState({ sampleQueryResults: queryResults })
    }
}
