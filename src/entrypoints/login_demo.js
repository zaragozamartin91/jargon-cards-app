import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import MainNavigator from '../components/MainNavigator'
import LoginDemo from '../components/LoginDemo'

const container = document.getElementById('app')


// Create a root.
const root = ReactDOMClient.createRoot(container)
root.render(
    <React.StrictMode>
        <MainNavigator />
        <hr />
        <LoginDemo />
    </React.StrictMode>
)
