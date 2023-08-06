import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import SideNavigator from '../components/SideNavigator'
import ContentContainer from "../components/ContentContainer";


const container = document.getElementById('app')

function About() {
    return <ContentContainer>
        <div>About the FANTASTIC page</div>
    </ContentContainer>
}


// Create a root.
const root = ReactDOMClient.createRoot(container)
root.render(
    <React.StrictMode>
        <SideNavigator />
        <About />
    </React.StrictMode>
)
