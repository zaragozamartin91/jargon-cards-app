import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import MainNavigator from '../components/MainNavigator'
import JargonCard from '../components/JargonCard'

const container = document.getElementById('app')


// Create a root.
const root = ReactDOMClient.createRoot(container)
root.render(
    <React.StrictMode>
        <MainNavigator />
        <hr />
        <JargonCard />
    </React.StrictMode>
)
