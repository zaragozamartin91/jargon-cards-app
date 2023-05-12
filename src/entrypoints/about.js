import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import MainNavigator from '../components/MainNavigator'


const container = document.getElementById('app')

function About() {
    return <div>About the FANTASTIC page</div>
}


// Create a root.
const root = ReactDOMClient.createRoot(container)
root.render(
    <React.StrictMode>
        <MainNavigator />
        <hr />
        <About />
    </React.StrictMode>
)
