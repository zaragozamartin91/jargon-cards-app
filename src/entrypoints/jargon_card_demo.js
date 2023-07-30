import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import MainNavigator from '../components/MainNavigator'
import JargonCardDemo from '../components/JargonCardDemo'

const container = document.getElementById('app')


// Create a root.
const root = ReactDOMClient.createRoot(container)
root.render(
    <React.StrictMode>
        <MainNavigator />
        <hr />
        <JargonCardDemo />
    </React.StrictMode>
)
