import React from 'react'
import FirebaseFacade from "./FirebaseFacade"


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { sampleQueryResults: [] }
    }

    render() {
        const queryResults = this.state.sampleQueryResults.map((qr, idx) => <li key={idx}>{qr}</li>)
        return <div>
            <button onClick={this.runSampleQuery.bind(this)} id="saple-query-button">Run sample query</button>
            <ul>
                {queryResults}
            </ul>
        </div>
    }

    async runSampleQuery() {
        const firebaseFacade = new FirebaseFacade()
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
