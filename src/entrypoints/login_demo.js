import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import LoginDemo from '../components/LoginDemo'
import SideNavigator from '../components/SideNavigator'

const container = document.getElementById('app')


// Create a root.
const root = ReactDOMClient.createRoot(container)
root.render(
    <React.StrictMode>
        <SideNavigator />
        <LoginDemo />
    </React.StrictMode>
)
