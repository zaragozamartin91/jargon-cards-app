import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Home from './components/Home';

const container = document.getElementById('app');

// Create a root.
const root = ReactDOMClient.createRoot(container);
root.render(<React.StrictMode><Home /></React.StrictMode>)
