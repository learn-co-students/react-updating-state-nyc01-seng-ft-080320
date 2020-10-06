import React, {Component} from 'react'

class ClickityClick extends Component {
    constructor() {
        super();
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {

        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })

        // if (this.state.hasBeenClicked) {
        //     this.setState(
        //         {hasBeenClicked: false},
        //         () => console.log(this.state.hasBeenClicked)
        //     )  
        // } else {        
        //     this.setState(
        //     {hasBeenClicked: true}
        //     )
        // }
        // console.log(this.state.hasBeenClicked)
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
                <button onClick={this.handleClick}>{this.state.hasBeenClicked ? ("Click Me Again!") : ("Click Me!")}</button>
            </div>
        )
    }
}

export default ClickityClick