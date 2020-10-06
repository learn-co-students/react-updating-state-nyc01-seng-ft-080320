// Code ClickityClick Component Here

import React, { Component } from 'react'


export default class ClickityClick extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasBeenClicked: false
        }
    }
    
    handleClick = (event) => {
        this.setState(previousState => {
            return{
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
        // (this.state.hasBeenClicked === false) ? this.setState({hasBeenClicked: true}) : this.setState({hasBeenClicked: false})
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
