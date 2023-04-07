import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import MainRouter from './components/MainRouter'


const container = document.getElementById('app')

// Create a root.
const root = ReactDOMClient.createRoot(container)
root.render(
    <React.StrictMode>
        <MainRouter />
    </React.StrictMode>
)
