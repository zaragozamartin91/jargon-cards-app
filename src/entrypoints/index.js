import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import Home from '../components/Home'
import MainNavigator from '../components/MainNavigator'

const container = document.getElementById('app')

// Create a root.
const root = ReactDOMClient.createRoot(container)
root.render(
    <React.StrictMode>
        <MainNavigator />
        <hr />
        <Home />
    </React.StrictMode>
)
