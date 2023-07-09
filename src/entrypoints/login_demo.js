import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import MainNavigator from '../components/MainNavigator'
import LoginDemo from '../components/LoginDemo'

const container = document.getElementById('app')

function asdasd() {
    const firebaseFacade = FirebaseFacade.getDefault()
    const firebaseAuth = firebaseFacade.getAuth()

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')

        signInWithEmailAndPassword(firebaseAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className="wrapper">
            <h1>How About Them Apples</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


// Create a root.
const root = ReactDOMClient.createRoot(container)
root.render(
    <React.StrictMode>
        <MainNavigator />
        <hr />
        <LoginDemo />
    </React.StrictMode>
)
