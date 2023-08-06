import React from 'react'
import FirebaseFacade from "../integrations/FirebaseFacade"
import ContentContainer from './ContentContainer'


export default class LoginDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <ContentContainer>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    <label>
                        <p>Username</p>
                        <input name="username" defaultValue="" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type='password' name="password" defaultValue="" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </ContentContainer>
    }

    handleSubmit(e) {
        e.preventDefault()
        // alert('You have submitted the form.')

        const form = e.target
        console.log(form)

        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)


        const firebaseFacade = FirebaseFacade.getDefault()
        firebaseFacade.signInWithEmailAndPassword(formJson.username, formJson.password)

    }
}
