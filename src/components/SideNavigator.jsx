import React from 'react'
import './SideNavigator.css'



export default class SideNavigator extends React.Component {
    constructor(props) {
        super(props)
        this.state = { sidebarOpen: false }
    }

    render() {
        /* Toggle sidebar widht on state change */
        const sidebarWidth = this.state.sidebarOpen ? "180px" : "0"

        return <div>
            <div id="mySidenav" className="sidenav" style={{ width: sidebarWidth }}>
                <a id='closeNavToggle' href='#' onClick={e => { this.closeNav(e) }}>X</a>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="login_demo.html">Login demo</a>
                <a href="jargon_card_demo.html">Jargon card demo</a>
            </div>

            <span id='openNavToggle' onClick={() => this.openNav()}>&#9776;</span>
        </div>
    }

    openNav() {
        console.log('Opening sidenav')
        this.setState({ sidebarOpen: true })
    }

    closeNav(event) {
        event.preventDefault()
        console.log('Closing sidenav')
        this.setState({ sidebarOpen: false })
    }
}
