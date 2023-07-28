import React from 'react'
import FirebaseFacade from '../integrations/FirebaseFacade'

const firebaseFacade = FirebaseFacade.getDefault()

function showCurrentUser() {
    const currentUser = firebaseFacade.currentUser
    if (currentUser) {
        alert(`User ${currentUser.uid} logged in`)
    } else {
        alert('No user logged in')
    }
}

export default function MainNavigator() {
    return <div>
        <nav>
            <ul>
                <li>
                    <a href='index.html'>Home</a>
                </li>
                <li>
                    <a href='about.html'>About</a>
                </li>
                <li>
                    <a href='login_demo.html'>Login demo</a>
                </li>
                <li>
                    <a href='jargon_card_demo.html'>Jargon card demo</a>
                </li>
            </ul>
        </nav>
        <button onClick={showCurrentUser}>Current user</button>
    </div>
}
